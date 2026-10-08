const decryptHintLink = document.getElementById('lnkDH');
if (decryptHintLink !== null && window.hintInitiallyDecrypted !== true) {
    decryptHintLink.click();
}
document.getElementById('gc-utils-decrypt-hint-script').remove();
