<?php

/* https://api.telegram.org/bot1086313581:AAEkwYNMpNF-OUJttw5HtunL6RmCrRVvjnA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['Name'];
$phone = $_POST['Phone'];
$token = "1086313581:AAEkwYNMpNF-OUJttw5HtunL6RmCrRVvjnA";
$chat_id = "-326149079";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Thanks";
  // header('Location: thank-you.html');
} else {
  echo "Error";
}
?>