<?php
namespace rCredits\SMS;
use \rCredits as r;
/**
 * @file
 * rSMS include file
 *
 * Utilities and definitions for the rSMS module
 * (anything that doesn't have to be in rsms.module and isn't appropriate to class call).
 */

define('RSMS_PREFIX', 'AS IF: '); // the pre-launch trial
//define('RSMS_PREFIX_INACTIVE', '[TRIAL RUN] '); // pretend transactions by not-yet-active players (treat it as a trial run)
//define('RSMS_PREFIX_ASIF', 'PRETEND - '); // pretend transactions by Active Participants

$GLOBALS['SMS messages'] = array(
  // reports
  'account info' => t("Your balance for account @id is @balance, including @rewards of incentive rewards. Total demand for rCredits is @total_demand."),
//  'account info2' => t("More account info"), // not used yet
  'your account is ready' => t('Your starting balance is @balance. Pretend to buy and sell as you would in a typical month (we need that info). Have fun! Type "helpme" to get started.'),
  'get usd' => t("Exchange approved. @amount will be transferred directly to your bank account within 24 hours. Your new balance is @balance."),
//  'get usd inactive' => t("If you were an Active Participant in the rCredits system, your request would transfer @amount directly to your bank account. Alas, you are not yet an Active Participant."),
  'report transaction' => t("You @type @other @amount (@reward_type: @reward_amount). Your new balance is @balance. Transaction #@tid"),
  'report short transaction' => t("You @type @other @amount (@short remains to be paid). Your new balance is @balance. Transaction #@tid"),
//  'transaction done asif' => t("@type: @amount @tofrom user#@other (@reward_type: @reward_amount). Your new provisional balance is @balance (If this had been a real transaction, your balance would be @amount @moreless). Transaction ID #@xid"),
  'report exchange' => t("You @type @other @amount @way. Your new balance is @balance. Transaction #@tid"),
  'your demand' => t("Your total request for rCredits is now @amount."),

  // questions
  "what's your name?" => t("To set up your rCredits account, we need your full name and email address. What's your name?"),
  "what's your name really?" => t("Hmm. I don't know if I believe that. What's your name really?"),
  "what's your email?" => t("Welcome to rCredits, @name (account id @id). Last question: What's your email address?"),
  "what's your email really?" => t("Please type carefully. What is your email address?"),
  
  // confirmations
  'confirm get usd' => t("Trade r@amount for us@amount?"),
  'confirm payment' => t("Pay @other @amount for goods and services?"),
  'confirm charge' => t("Charge @other @amount for goods and services?"),
  'confirm credit for cash' => t("Give @other r@amount for cash?"),
  'confirm cash for credit' => t("Give @other @amount cash for rCredits?"),
  'please confirm' => t("To confirm, type @nonce."),
  
  // error messages
  'syntax' => t('Wrong syntax!'),
  'duplicate name' => t('That name is already taken, in your region. Try again. Use a middle initial?'),
  'name too long' => t('That name is too long. Try again (keep it under 60 characters).'),
  //  'no SMS permission' => t('Alas, you do not have permission to use the rCredits SMS interface at this time.'), // UNUSED
  "can't cash incentives" => t("You can SPEND your incentive rewards (@rewards to date), but you can't cash them out. Your balance available to exchange for US Dollars is @cashable."),
//  "can't cash incentives" => t("Once you are an active participant, you can spend your incentive rewards (@balance to date), but you can't cash them out. Your balance available to exchange for US Dollars is $0."),
//  'get r/usd' => t('You can get only "r" or "usd" (rCredits or US Dollars).'), // not yet used (maybe used when there is a third option)
  'not a feature' => t('"@feature" is not a feature.'),
  'wrong nonce' => t('That is not the expected confirmation response. Try again (start over).'),
  'no self-trading' => t("You can't exchange rCredits with yourself."),
  'duplicate email' => t("There is already an account with that email address. Visit rCredits.org to add this cell number to your account."),
  'unknown user' => t('Unknown rTrader: "@who". Type "helpme pay".'),
  'non trader' => t('@other does not an authorized rTrader.'),
  'ambiguous other' => t('"@who" is associated with more than one rCredits account. You will need to identify them differently. Type "more" for options.'),
  'ambiguous other2' => t('You can identify an rTrader by phone, email, account id, or .fullname (with a dot before the name, no spaces).'),
  'short cash to' => t('You are r@short short, for that exchange.'),
  'short cash from' => t('@other does not have enough rCredits for that exchange.'),
  'broke to' => t('You are completely out of rCredits, so that transaction cannot be completed. Type "get r <amount>" to get more rCredits.'),
  'broke from' => t('@other does not have enough rCredits for that transaction at this time. But your request has been noted.'),
);

  // help messages (for use with the help command)
$GLOBALS['SMS help'] = array(
  'help payment' => t('To pay Jane Dough $30 for pie, type "30 to .janedough for pie" (with a dot before the name, no spaces). Type "more" for options.'),
  'help payment2' => t('You can also identify the recipient by phone, email, or account id (withOUT a dot before any of these). Type "more" for more details.'),
  'help payment22' => t('If you are just exchanging rCredits for cash, leave out the description. For example, type "43.12 to jdough@example.com".'),
  'help charge' => t('To charge Food Corp $90 for labor, type "90 from .foodcorp for labor" (with a dot before the name, no spaces). Type "more" for options.'),
  'help charge2' => t('You can also identify the payer by phone, email, or account id (withOUT a dot before any of these). Type "more" for more details.'),
  'help charge22' => t('If you are just exchanging cash for rCredits, leave out the description. For example, type "43.12 from 413-772-6666".'),
  'help undo' => t('To undo your most recent transaction, type "undo". Type "more" for options to undo your most recent transaction of a certain type.'),
  'help undo2' => t('Examples: undo | undo .janedough | undo to | undo from | undo to .janedough | undo from .janedough -- Type "more" for details.'),
  'help undo22' => t('"undo .janedough" undoes your most recent transaction with Jane Dough. You can also identify her by phone, email, or account id.'),
  'help get' => t('To get $200 more in rCredits, type "get r 200". To send $50 in rCredits to your US bank account, type "get usd 50".'),
  'help information' => t('Just type "info" (tells you your balance and the current demand for rCredits)'),
  'help helpme' => t('Options: pay | charge | undo | info | get | helpme. For details, type "helpme pay" and so forth.'),
);

$GLOBALS['SMS messages'] = array_merge($GLOBALS['SMS messages'], $GLOBALS['SMS help']); 
$GLOBALS['SMS messages']['help helpme no-error'] = t('Try something! ') . tt('help helpme');
foreach (array('more', 'stop', 'start') as $one) $GLOBALS['SMS messages']["help $one"] = tt('help helpme');

$GLOBALS['SMS commands'] = array( // these can be abbreviated by the caller
  'get' => array('get %rusd %amount', 'get %amount %rusd'), // best before pay, so that "g r 10" is interpreted as "get r" not "give who"
  'payment' => array(
    '(?:(?:payment|give|send) )?%amount to %who(?: for %what)?', 
    '(?:to|payment|give|send) %who %amount(?: for %what)?',
  ),
  'charge' => array(
    '(?:(?:charge|invoice|take|chg) )?%amount from %who(?: for %what)?', 
    '(?:from|charge|invoice|chg) %who %amount(?: for %what)?',
  ),
  'undo' => array(
    '(?:undo|reverse|canc)', // can't use CANCEL because Twilio reserves it
    '(?:undo|reverse|canc) %tofrom',
    '(?:undo|reverse|canc) %who',
    '(?:undo|reverse|canc) %tofrom %who',
  ),
  'information' => array('information', 'balance'),
  'helpme' => '(?:help me|helpme)?(?: %feature)?',
  'more' => 'more', // continuation of help
  'stop' => 'stop|unsubscribe|cancel|quit', // passed from SMS Gateway
  'start' => 'start|yes', // passed from SMS Gateway
);
$GLOBALS['SMS gateway words'] = r\ray('stop unsubscribe cancel quit start yes help'); // "help" never reaches us
$GLOBALS['SMS reserved words'] = r\ray('to from usd balance name lost be give send invoice take')
                               + array_keys($GLOBALS['SMS commands']); 

$GLOBALS['SMS command tokens'] = array(
  '%tofrom' => '(to|from)',
  '%amount' => '([0-9]+(?:.[0-9][0-9]?)?)',
  '%who' => '([^ ]+)',
  '%what' =>  '(.+)',
  '%rusd' => '(r|usd)',
  '%currency' => '([a-z]+)',
  '%feature' => '([^ ]+)',
);

/**
 * Get the long version of the indicated message(s), make any substitutions,
 * and return the result.
 *
 * @param string $message
 *   name of the message (index into $GLOBALS['SMS messages'])
 *   or a list of such message indices, separated by "|"
 *
 * @param array $substitutions (optional). '@' will be prepended to the keys.
 */   
function tt($message, $substitutions = array()) {
  $subs = array();
  foreach ($substitutions as $key => $value) $subs["@$key"] = $value;
  $messages = explode('|', $message);
  $result = array();
  foreach ($messages as $message) {
    $result[] = t($GLOBALS['SMS messages'][$message], $subs);
  }
  return join(' ', $result);
}

/**
 * Send an SMS message to someone.
 */
function send($number, $message0) {
  $number = r\format_phone($number, '+n');
  $message = substr($message0, 0, 160-1); // minus one because Twilio splits messages 160 chars long (and may discard the first part)
  if ($message != $message0) $message0 .= ' -- TOO LONG! (strlen ' . strlen($message0) . ')';
  if (sms_devel_gateway()) if ($message != $message0) r\deb($message0); // debug
  \sms_send($number, $message);
  r\r_log('SMSout', $message0, $number, infer_nonce($message0));
}

/**
 * Return the nonce (if any) from within the given message.
 */
function infer_nonce($message) {
  $pattern = tt('please confirm', array('nonce' => '([A-Z]*?)'));
  preg_match("`$pattern`", $message, $match);
  return isset($match[1]) ? $match[1] : '';
}

/**
 * Remember what to do, once the user confirms.
 *
 * @parm string $number: the user's cell number (in standard format +1dddddddddd)
 * @parm string $todo: what to do once the user responds with the expected nonce (defaults to 'nothing')
 * @parm string $nonce: what to store as the nonce (defaults to 'whatever', meaning pick one at random)
 *
 * @return object(nonce, todo) if $todo is 'nothing', else the nonce
 */
function todo($number, $todo = 'nothing', $nonce = 'whatever') {
  if ($todo == 'nothing') {
    return (object) \db_query("SELECT nonce, todo FROM sms_user WHERE number = $number")->fetchAssoc();
  } else {
    $todo = addslashes($todo);
    $nonce = $nonce == 'whatever' ? nonce() : $nonce;
// FAILS because of {}    \db_query("UPDATE sms_user SET nonce = '$nonce', todo = '$todo' WHERE number = $number");
    \db_update('sms_user')->fields(compact('nonce', 'todo'))->condition('number', $number, '=')->execute();
    return $nonce;
  }
}

/**
 * Return random uppercase dictionary word of 3-6 chars
 * The word will not be a valid command or command abbreviation.
 */
function nonce() {
  $offset = r\db_lookup('FLOOR(RAND() * COUNT(*))', 'r_nonces');
  $nonce = r\db_lookup('nonce', 'r_nonces', "1 LIMIT $offset, 1");

  $impossible = join(' ', $GLOBALS['SMS reserved words'] + $GLOBALS['SMS gateway words']);
  if (strpos(". $impossible ", " $nonce ")) return nonce(); // reserved word? try again
  if (strlen($nonce) > 6) return nonce(); // too long
  return $nonce;
}

/**
 * Create a temporary account for the given user.
 * @parm array $info: associative array of information about the user
 *   'phone' is contact phone (in standard +ddddddddddd format)
 *   'number' is cell phone (in standard +ddddddddddd format -- use for phone also)
 *   'email' is email address
 *   UNUSED (because it's hard to verify): 'website' is website address
 * @return the uid of the new account
 */
function create_account($info) {
  extract($info, EXTR_PREFIX_ALL, 'my');
  $tx = \db_transaction();
  foreach ($info as $one) if (identify($one)) die('creating duplicate user'); // DEBUG remove this line soon
  if (isset($my_number) and !isset($my_phone)) $my_phone = $info['phone'] = $my_number;
  $account = r\create_user($info);
  if (isset($my_number)) {
    r\make_credit_id($account); // no id unless user is a player
// UNUSED    todo($my_number, 'first call', '');
  }
  return $account->uid;
}

/**
 * Add the cell owner's full name to the account.
 * @return the full name
 */
function setup_name($account, $name) {
  $name = str_replace('  ', ' ', trim($name));
  if (strlen($name) > 60) throw new \Exception(tt('name too long'));
  if (strtolower($name) == $name or strtoupper($name) == $name) $name = ucwords($name);
  if (!r\valid_name($name)) throw new \Exception(tt("what's your name really?"));
  $full_name = $name;
  $name = $short_name = strtolower(preg_replace('/\W/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $full_name)));
  if (r\db_lookup(1, 'users', "short_name = ':short_name'", compact('short_name'))) throw new \Exception(tt('duplicate name'));
  r\deb('before save');
  $edit = compact('name', 'short_name', 'full_name');
  return \user_save($account, $edit)->full_name;
}

/**
 * Add the caller's email to the account.
 * @return object: the account
 */
function setup_email($account, $email) {
  if (!\valid_email_address($email)) throw new \Exception(tt("what's your email really?"));
  if (r\db_lookup(1, 'users', "mail = '$email'")) throw new \Exception(tt('duplicate email'));
  $edit = array(); // no edits yet
  $edit['mail'] = $edit['init'] = $email;
  return \user_save($account, $edit);
}

/**
 * Return a pattern that includes all abbreviations of the word.
 */
function abbreviator($word) {
  $result = substr($word, 0, 1);
  for ($i = 2; $i <= strlen($word); $i++) {
    $result .= '|' . substr($word, 0, $i);
  }
  return "(?:$result)";
}

/**
 * Return the command if it was intended by the given message.
 * Otherwise return the standing intent.
 *
 * @parm string $intent: the standing intent (FALSE if none)
 * @parm string $command: the command to test against the message
 * @parm string $pattern: the command pattern(s) for the given command
 * @parm string $message: the message to interpret
 */
function intent($intent, $command, $pattern, $message) {
  if ($command == 'payment' | $command == 'charge') {
    $abbrev = abbreviator($command == 'charge' ? 'from' : 'to');
    if (preg_match("/(^| )$abbrev( |$)/i", $message)) return $command;
  }
  $short_pattern = preg_replace('~\(\?\:|\)~', '', substr($pattern, 0, strpos("$pattern ", ' '))); // isolate command words
  return preg_match("/^($short_pattern)( |$)/i", $message, $matches) ? $command : $intent;
}

/**
 * Figure out who the caller meant.
 *
 * @parm string $value: how the user referred to the trader
 * @parm array (returned) $create_info: associative array of user field values
 *   for creating a record if no matching user can be found (FALSE if no usable data)
 * @return: the trader's uid (FALSE if not found, array of uids if several)
 */
function identify($value, &$create_info = array()) {
  if ($phone = r\format_phone($value, '+n')) $value = $phone;
//  if (substr($value, 0, 7) == 'http://') $value = substr($value, 7);
//  if (substr($value, 0, 4) == 'www.') $value = substr($value, 4);

  $value = strtolower(str_replace("'", '', $value)); // avoid SQL errors
  $sql = "SELECT u.uid FROM {users} u LEFT JOIN {sms_user} s ON u.uid = s.uid 
          WHERE '$value' IN (CONCAT('.', u.short_name), u.credit_id, s.number, u.phone, u.mail)";
  $result = db_query($sql)->fetchCol();
  if (isset($result[0])) return count($result) > 1 ? $result : $result[0];

//  $key = $value == $phone ? 'phone' : (valid_email_address($value) ? 'email' : (r\valid_url("http://$value") ? 'website' : ''));
  $key = $value == $phone ? 'phone' : (valid_email_address($value) ? 'email' : '');
  $create_info = $key ? array($key => $value) : FALSE;
  return FALSE;
}