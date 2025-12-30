
// copy the button contents to a clipboard! Sweet feature
var email_btn = document.getElementById('email-button')
email_btn.addEventListener('click', function(e)
{
    let emailAddress = document.getElementById('email-address')
    copiedEmail = emailAddress.innerHTML // getAttribute('data-bs-src')
    // console.log(copiedEmail)

    navigator.clipboard.writeText(copiedEmail)
    alert("Copied Email to clipboard: " + copiedEmail)

})