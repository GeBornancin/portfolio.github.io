function copyToClipboard() {
  // Copia o texto para a área de transferência
  const email = "gebornancin@gmail.com";
  navigator.clipboard.writeText(email);

  // Exibe a mensagem de confirmação
  const confirmationMessage = document.createElement("div");
  confirmationMessage.innerText =
    "E-mail copiado para a área de transferência!";
  confirmationMessage.style.position = "fixed";
  confirmationMessage.style.bottom = "20px";
  confirmationMessage.style.left = "50%";
  confirmationMessage.style.transform = "translateX(-50%)";
  confirmationMessage.style.padding = "10px";
  confirmationMessage.style.backgroundColor = "black";
  confirmationMessage.style.color = "white";
  confirmationMessage.style.borderRadius = "5px";
  confirmationMessage.style.opacity = "0.8";
  confirmationMessage.style.zIndex = "9999";
  document.body.appendChild(confirmationMessage);

  // Remove a mensagem de confirmação após 2 segundos
  setTimeout(() => {
    confirmationMessage.remove();
  }, 2000);
}

$(document).ready(function () {
  $(".sportdatalink video").hover(function () {
    $(".video-hover-text").addClass("show");
  }, function () {
    $(".video-hover-text").removeClass("show");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const sentinela = document.querySelector('#sentinela');

  const observerOptions = {
    root: null, // Observa em relação à viewport
    rootMargin: '0px',
    threshold: 0 // Dispara quando qualquer parte do sentinela está visível
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando o sentinela está visível, oculta o header
        header.classList.remove('visible');
      } else {
        // Quando o sentinela não está visível, exibe o header
        header.classList.add('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(sentinela);
});
//   var audio = document.getElementById('hover_card');

// document.querySelector('.flutter').addEventListener('mouseover', function() {
//   audio.play();
// });

// document.querySelector('.react-native').addEventListener('mouseover', function() {
//   audio.play();
// });
// document.querySelector('.sportdata').addEventListener('mouseover', function() {
//   audio.play();
// });
// document.querySelector('.escola').addEventListener('mouseover', function() {
//   audio.play();
// });
// document.querySelector('.estagif').addEventListener('mouseover', function() {
//   audio.play();
// });