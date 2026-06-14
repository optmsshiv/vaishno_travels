<?php
/**
 * send_enquiry.php  —  Shree Vaishnо Travels
 */

/* ── Catch ALL errors and return JSON, never a 500 ── */
ini_set('display_errors', 0);
error_reporting(E_ALL);

set_exception_handler(function($e) {
    if (!headers_sent()) { header('Content-Type: application/json'); http_response_code(200); }
    echo json_encode(['success' => false, 'error' => 'PHP Exception: ' . $e->getMessage()]);
    exit;
});

set_error_handler(function($errno, $errstr, $errfile, $errline) {
    if (!headers_sent()) { header('Content-Type: application/json'); http_response_code(200); }
    echo json_encode(['success' => false, 'error' => "PHP Error [$errno]: $errstr in $errfile line $errline"]);
    exit;
});

register_shutdown_function(function() {
    $err = error_get_last();
    if ($err && in_array($err['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        if (!headers_sent()) { header('Content-Type: application/json'); http_response_code(200); }
        echo json_encode(['success' => false, 'error' => 'Fatal: ' . $err['message'] . ' in ' . $err['file'] . ' line ' . $err['line']]);
    }
});

/* ════════════════════════════════════════════════
   ★  CONFIGURE THESE — nothing else needs change ★
   ════════════════════════════════════════════════ */
define('SMTP_HOST',   'smtp.gmail.com');
define('SMTP_PORT',   587);
define('SMTP_USER',   'shivamrajputjk02df3893@gmail.com');
define('SMTP_PASS',   'epqd lyyr cbhi nflb');
define('ADMIN_EMAIL', 'shivamrajputjk02df3893@gmail.com');
define('FROM_NAME',   'Shree Vaishnо Travels');

/* ═══════════════════════════════════════════════ */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

/* ── Load PHPMailer (bundled — no Composer needed) ── */
$bundle = __DIR__ . '/phpmailer_bundle.php';
if (!file_exists($bundle)) {
    $files = @scandir(__DIR__) ?: [];
    echo json_encode(['success' => false, 'error' => 'phpmailer_bundle.php not found. Files: ' . implode(', ', $files)]);
    exit;
}
require $bundle;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* ── Read & validate JSON body ── */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || empty($data['name']) || empty($data['email'])) {
    echo json_encode(['success' => false, 'error' => 'Invalid or missing data. Raw: ' . substr($raw, 0, 200)]);
    exit;
}

/* ── Sanitise ── */
function s($v) {
    return htmlspecialchars(trim((string)($v ?? '')), ENT_QUOTES, 'UTF-8');
}

$d = [
    'name'         => s($data['name']),
    'phone'        => s($data['phone']),
    'email'        => filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL),
    'state'        => s($data['state']),
    'city'         => s($data['city']),
    'adults'       => s($data['adults']),
    'children'     => s($data['children']),
    'destination'  => s($data['destination']),
    'checkin'      => s($data['checkin']),
    'checkout'     => s($data['checkout']),
    'month'        => s($data['month']),
    'arrival'      => s($data['arrival']),
    'departure'    => s($data['departure']),
    'duration'     => s($data['duration']),
    'budget'       => s($data['budget']),
    'transport'    => s($data['transport']),
    'requirements' => s($data['requirements']),
    'special'      => s($data['special']),
    'call_date'    => s($data['call_date']),
    'call_time'    => s($data['call_time']),
    'call_type'    => s($data['call_type']),
    'utr'          => s($data['utr']),
];

if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid email: ' . $d['email']]);
    exit;
}

/* ══════════════════════
   ADMIN EMAIL BODY
   ══════════════════════ */
$adminBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'>
<style>
  body{font-family:Arial,sans-serif;background:#fff8f0;margin:0;padding:20px}
  .wrap{max-width:620px;margin:0 auto;background:#fff;border-radius:10px;border:2px solid #D4A017;overflow:hidden}
  .header{background:linear-gradient(135deg,#7B1818,#C0460E);color:#fff;padding:24px 30px;text-align:center}
  .header h1{margin:0;font-size:20px;letter-spacing:1px}
  .header p{margin:6px 0 0;font-size:13px;opacity:.85}
  .body{padding:24px 30px}
  .section{margin-bottom:20px;background:#FDF6E3;border-radius:8px;border-left:4px solid #E8681A;padding:14px 16px}
  .section h2{font-size:13px;text-transform:uppercase;letter-spacing:.8px;color:#7B1818;margin:0 0 10px}
  table{width:100%;border-collapse:collapse}
  td{padding:5px 0;font-size:14px;vertical-align:top}
  td:first-child{color:#9B6040;width:42%;font-weight:bold}
  .highlight{background:#7B1818;color:#fff;padding:10px 16px;border-radius:6px;font-size:15px;font-weight:bold;margin-bottom:20px;text-align:center}
  .footer{background:#1A0505;color:#9B6040;text-align:center;padding:14px;font-size:12px}
</style></head><body>
<div class='wrap'>
  <div class='header'><h1>🙏 New Travel Enquiry</h1><p>Submitted via shrivaishnotravels.in</p></div>
  <div class='body'>
    <div class='highlight'>📞 Callback: {$d['call_date']} at {$d['call_time']} ({$d['call_type']})</div>
    <div class='section'><h2>👤 Personal Details</h2><table>
      <tr><td>Name</td><td>{$d['name']}</td></tr>
      <tr><td>Phone / WhatsApp</td><td>{$d['phone']}</td></tr>
      <tr><td>Email</td><td>{$d['email']}</td></tr>
      <tr><td>City</td><td>{$d['city']}, {$d['state']}</td></tr>
    </table></div>
    <div class='section'><h2>✈️ Trip Details</h2><table>
      <tr><td>Destination</td><td>{$d['destination']}</td></tr>
      <tr><td>Check-in</td><td>{$d['checkin']}</td></tr>
      <tr><td>Check-out</td><td>{$d['checkout']}</td></tr>
      <tr><td>Preferred Month</td><td>{$d['month']}</td></tr>
      <tr><td>Arrival City</td><td>{$d['arrival']}</td></tr>
      <tr><td>Departure City</td><td>{$d['departure']}</td></tr>
      <tr><td>Duration</td><td>{$d['duration']}</td></tr>
    </table></div>
    <div class='section'><h2>👥 Group &amp; Budget</h2><table>
      <tr><td>Adults</td><td>{$d['adults']}</td></tr>
      <tr><td>Children</td><td>{$d['children']}</td></tr>
      <tr><td>Budget</td><td>{$d['budget']}</td></tr>
      <tr><td>Transport</td><td>{$d['transport']}</td></tr>
    </table></div>
    <div class='section'><h2>📋 Requirements</h2><table>
      <tr><td>Requirements</td><td>{$d['requirements']}</td></tr>
      <tr><td>Special Requests</td><td>{$d['special']}</td></tr>
    </table></div>
    <div class='section'><h2>💳 Payment</h2><table>
      <tr><td>UTR / Reference</td><td>{$d['utr']}</td></tr>
    </table></div>
  </div>
  <div class='footer'>Shree Vaishnо Travels &nbsp;|&nbsp; Enquiry received automatically</div>
</div></body></html>";

/* ══════════════════════
   USER CONFIRMATION BODY
   ══════════════════════ */
$userBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'>
<style>
  body{font-family:Arial,sans-serif;background:#fff8f0;margin:0;padding:20px}
  .wrap{max-width:600px;margin:0 auto;background:#fff;border-radius:10px;border:2px solid #D4A017;overflow:hidden}
  .header{background:linear-gradient(135deg,#7B1818,#E8681A);color:#fff;padding:30px;text-align:center}
  .header h1{margin:0;font-size:22px;letter-spacing:1px}
  .header p{margin:8px 0 0;font-size:14px;opacity:.9}
  .body{padding:28px 30px;color:#2C0A0A}
  .callbox{background:linear-gradient(135deg,#FDF6E3,#FFF9F0);border:2px solid #D4A017;border-radius:10px;padding:18px 20px;margin:20px 0;text-align:center}
  .callbox h2{margin:0 0 8px;color:#7B1818;font-size:15px;text-transform:uppercase;letter-spacing:.6px}
  .callbox p{margin:4px 0;font-size:15px;color:#2C0A0A;font-weight:bold}
  .summary{background:#FDF6E3;border-radius:8px;padding:16px 18px;margin:20px 0}
  .summary h3{font-size:13px;text-transform:uppercase;letter-spacing:.7px;color:#7B1818;margin:0 0 10px}
  table{width:100%;border-collapse:collapse}
  td{padding:5px 0;font-size:14px;vertical-align:top}
  td:first-child{color:#9B6040;width:45%;font-weight:bold}
  .promise{font-size:14px;color:#5C2A0A;line-height:1.7;margin:16px 0}
  .footer{background:#1A0505;color:#9B6040;text-align:center;padding:16px;font-size:12px;line-height:1.6}
</style></head><body>
<div class='wrap'>
  <div class='header'><h1>🙏 Jai Mata Di!</h1><p>Your enquiry has been received</p></div>
  <div class='body'>
    <p style='font-size:16px;margin-bottom:16px'>Dear <strong>{$d['name']}</strong>,</p>
    <p class='promise'>Thank you for choosing <strong>Shree Vaishnо Travels</strong> for your sacred yatra.
    We have received your enquiry and our travel expert will personally call you at the scheduled time below. 🙏</p>
    <div class='callbox'>
      <h2>📞 Your Callback Appointment</h2>
      <p>{$d['call_date']} &nbsp;·&nbsp; {$d['call_time']}</p>
      <p style='font-size:13px;color:#9B6040;font-weight:normal'>{$d['call_type']}</p>
    </div>
    <div class='summary'><h3>✈️ Your Booking Summary</h3><table>
      <tr><td>Destination</td><td>{$d['destination']}</td></tr>
      <tr><td>Check-in</td><td>{$d['checkin']}</td></tr>
      <tr><td>Check-out</td><td>{$d['checkout']}</td></tr>
      <tr><td>Adults</td><td>{$d['adults']}</td></tr>
      <tr><td>Children</td><td>{$d['children']}</td></tr>
      <tr><td>Budget</td><td>{$d['budget']}</td></tr>
      <tr><td>Transport</td><td>{$d['transport']}</td></tr>
    </table></div>
    <p class='promise'>If you have any questions before your callback, feel free to WhatsApp us directly. We look forward to making your yatra a blessed experience.</p>
    <p style='color:#9B6040;font-size:13px;margin-top:20px'>Please do not reply to this email — it is sent automatically.</p>
  </div>
  <div class='footer'>
    <strong style='color:#D4A017'>Shree Vaishnо Travels</strong><br>
    Sacred Journeys · shrivaishnotravels.in<br>
    Questions? WhatsApp us anytime
  </div>
</div></body></html>";

/* ══════════════════════
   BUILD MAILER HELPER
   ══════════════════════ */
function buildMailer(): PHPMailer {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';
    $mail->isHTML(true);
    $mail->setFrom(SMTP_USER, FROM_NAME);
    return $mail;
}

$errors = [];

/* Send to admin */
try {
    $mail = buildMailer();
    $mail->addAddress(ADMIN_EMAIL);
    $mail->addReplyTo($d['email'], $d['name']);
    $mail->Subject = "New Enquiry: {$d['name']} → {$d['destination']} ({$d['checkin']})";
    $mail->Body    = $adminBody;
    $mail->AltBody = "New enquiry from {$d['name']} ({$d['phone']}) for {$d['destination']}. Check-in: {$d['checkin']}. Callback: {$d['call_date']} {$d['call_time']}.";
    $mail->send();
} catch (Exception $e) {
    $errors[] = 'Admin mail failed: ' . $mail->ErrorInfo;
}

/* Send confirmation to user */
try {
    $mail = buildMailer();
    $mail->addAddress($d['email'], $d['name']);
    $mail->Subject = "✅ Enquiry Confirmed — {$d['destination']} | Shree Vaishnо Travels";
    $mail->Body    = $userBody;
    $mail->AltBody = "Dear {$d['name']}, your enquiry for {$d['destination']} is confirmed. We will call you on {$d['call_date']} at {$d['call_time']}. — Shree Vaishnо Travels.";
    $mail->send();
} catch (Exception $e) {
    $errors[] = 'User mail failed: ' . $mail->ErrorInfo;
}

if (empty($errors)) {
    echo json_encode(['success' => true]);
} else {
    error_log('[send_enquiry.php] ' . implode(' | ', $errors));
    /* Still return success=true if at least one mail sent, but include debug info */
    echo json_encode(['success' => count($errors) < 2, 'warnings' => $errors]);
}