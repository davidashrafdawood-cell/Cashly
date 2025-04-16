
// function goToLogin() {
//     document.getElementById("landing").classList.add("hidden");
//     document.getElementById("login").classList.remove("hidden");
//     document.getElementById("mainNavbar").classList.add("hidden");
// }

function showDashboard() {
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("offers").classList.add("hidden");
    document.getElementById("installments").classList.add("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("mainNavbar").classList.remove("hidden");
}

// function showDashboardDirect() {
//     document.getElementById("landing").classList.add("hidden");
//     document.getElementById("login").classList.add("hidden");
//     document.getElementById("offers").classList.add("hidden");
//     document.getElementById("dashboard").classList.remove("hidden");
//     document.getElementById("mainNavbar").classList.remove("hidden");
// }

// function goToLanding() {
//     document.getElementById("dashboard").classList.add("hidden");
//     document.getElementById("landing").classList.remove("hidden");
//     document.getElementById("offers").classList.add("hidden");
//     document.getElementById("mainNavbar").classList.add("hidden");
// }

function showOffers() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("offers").classList.remove("hidden");
    document.getElementById("installments").classList.add("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("mainNavbar").classList.remove("hidden");
}

// function logout() {
//     document.getElementById("dashboard").classList.add("hidden");
//     document.getElementById("mainNavbar").classList.add("hidden");
//     document.getElementById("login").classList.remove("hidden");
// }

function showInstallments() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("offers").classList.add("hidden");
    document.getElementById("installments").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("mainNavbar").classList.remove("hidden");
}

function openPopup(serviceName) {
    document.getElementById("popupTitle").textContent = serviceName;
    document.getElementById("servicePopup").classList.remove("hidden");
}
function closePopup() {
    document.getElementById("servicePopup").classList.add("hidden");
}

function subscribeOffer() {
    document.getElementById("subscribePopup").classList.remove("hidden");
}
function closeSubscribePopup() {
    document.getElementById("subscribePopup").classList.add("hidden");
}

document.getElementById("transactionFilter").addEventListener("change", function () {
    const selectedDate = this.value;
    const items = document.querySelectorAll("#transactionList li");

    items.forEach(item => {
        const dateText = item.querySelector("span:last-child").textContent;
        if (dateText === selectedDate || selectedDate === "") {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});

// حفظ بيانات المستخدم عند التسجيل وتحقق من تسجيل الدخول

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;

            // تخزين البيانات في localStorage
            localStorage.setItem("user", JSON.stringify({ username, password }));

            alert("تم إنشاء الحساب بنجاح!");
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const enteredUsername = document.getElementById("login-username").value;
            const enteredPassword = document.getElementById("login-password").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (
                storedUser &&
                enteredUsername === storedUser.username &&
                enteredPassword === storedUser.password
            ) {
                alert("تم تسجيل الدخول بنجاح!");
                window.location.href = "dashboard.html";
            } else {
                alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
            }
        });
    }
});
// جلب البيانات من localStorage
document.addEventListener("DOMContentLoaded", function () {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username) {
        document.getElementById("user-name").textContent += storedUser.username;
    } else {
        document.getElementById("user-name").textContent += "زائر";
    }
    // Generate 4 random floating-point numbers between 0 and 10
    // Function to generate a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate 4 random integers between 1 and 9
    let randomNumbers = [];
    for (let i = 0; i < 4; i++) {
        randomNumbers.push(getRandomInt(1, 9));  // Replace 1 and 100 with your desired range
    }
    document.getElementById("user-num").textContent = randomNumbers.join('') + "**** **** ****";
    // وظيفة لتوليد عدد عشوائي بين min و max (شاملين)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // توليد مبلغ عشوائي بين 1 و 10000
    let randomAmount = getRandomInt(1, 10000);
    document.getElementById("balance").textContent = randomAmount +"ج.م.";
});