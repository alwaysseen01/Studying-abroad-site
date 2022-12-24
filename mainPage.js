
// FAQ inner text appearing/disappearing
const openFAQLowerText = (button_id) => {
    let lower_id = button_id.slice(0, button_id.indexOf("-") + 2) + "-lower"
    let innerText_id = button_id.slice(0, button_id.indexOf("-") + 2) + "-lower-innerText"
    let height_condition = document.getElementById(lower_id).style.height
    let vertical_line_id = button_id.slice(0, button_id.indexOf("-") + 2) + "-button-vertical"
    let horizontal_line_id = button_id.slice(0, button_id.indexOf("-") + 2) + "-button-horizontal"
    if (height_condition == "" || height_condition == "0px") {
        if (lower_id == "faq-1-lower") {
            document.getElementById(lower_id).style.height = "150px"
        }
        else {
            document.getElementById(lower_id).style.height = "100px"
        }
        document.getElementById(vertical_line_id).style.transform = "rotate(45deg)"
        document.getElementById(horizontal_line_id).style.transform = "rotate(45deg)"
        setTimeout(function() {
            document.getElementById(innerText_id).style.opacity = "1"
        }, 300)
    }
    else if (height_condition >= "100px") {
        document.getElementById(innerText_id).style.opacity = "0"
        document.getElementById(vertical_line_id).style.transform = "rotate(0deg)"
        document.getElementById(horizontal_line_id).style.transform = "rotate(0deg)"
        setTimeout(function() {
            document.getElementById(lower_id).style.height = "0px"
        }, 200)
    }
}

// Sign-up button logic
const sendRequestToWhatsApp = () => {
    document.getElementById('footerFormPhone').className = 'footerFormPhone'
    document.getElementById('footerFormName').className = 'footerFormName'
    if (document.getElementById('footerFormName').value != "" && document.getElementById('footerFormPhone').value != "") {
        window.open("https://wa.me/+77077204161?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5!%0A%0A%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%BE%D0%B2%D1%83%D1%82%20" + document.getElementById('footerFormName').value + ",%20%D0%BC%D0%BE%D0%B9%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80: " + document.getElementById('footerFormPhone').value)
    }
    else {
        document.getElementById('footerFormPhone').className = 'footerFormPhoneWrong'
        document.getElementById('footerFormName').className = 'footerFormNameWrong'
    }
}