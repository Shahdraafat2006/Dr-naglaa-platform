// نموذج تسجيل الدخول

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        document.getElementById("loginResult").textContent =
            "تم إدخال البريد: " + email +
            " — تسجيل الدخول الحقيقي يحتاج Back-End.";

    });

}


// تصحيح الاختبار

const quizForm = document.getElementById("quizForm");

if (quizForm) {

    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const selectedAnswer =
            document.querySelector('input[name="q1"]:checked');

        if (!selectedAnswer) return;

        document.getElementById("quizResult").textContent =
            selectedAnswer.value === "HTML"
                ? "إجابة صحيحة! أحسنتِ 🌟"
                : "إجابة غير صحيحة. الإجابة الصحيحة هي HTML.";

    });

}


// إضافة سؤال جديد

const questionForm = document.getElementById("questionForm");

if (questionForm) {

    questionForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const subject =
            document.getElementById("questionSubject").value;

        const question =
            document.getElementById("questionText").value.trim();

        document.getElementById("questionResult").textContent =
            "تم تجهيز السؤال للمادة: " +
            subject + " — " + question +
            " (لن يتم حفظه فعليًا قبل ربط الـ Back-End).";

        questionForm.reset();

    });

}


// تحديد اسم المادة في صفحة الاختبار

const subjectTitle = document.getElementById("subjectTitle");

if (subjectTitle) {

    const params =
        new URLSearchParams(window.location.search);

    const subject = params.get("subject");

    if (subject === "first") {
        subjectTitle.textContent =
            "اختبار تجريبي — المادة الأولى";
    }

    if (subject === "second") {
        subjectTitle.textContent =
            "اختبار تجريبي — المادة الثانية";
    }

}
