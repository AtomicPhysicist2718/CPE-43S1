const link = document.createElement("a");
link.href = "https://panlasangpinoy.com/sinigang-na-sardinas/";
link.textContent = "🔗 View Full Recipe at Panlasang Pinoy";
link.target = "_blank"; // opens in new tab
link.className = "external-link";

document.querySelector(".container").appendChild(link);