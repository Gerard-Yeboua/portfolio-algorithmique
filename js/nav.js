document.addEventListener("DOMContentLoaded", function() {
  const lecons = [
    // { titre: "", lien: "index.html" },
    { titre: "Leçon 01: Preuve et Complexité", lien: "lecon1.html" },
    { titre: "Leçon 02: Algorithmes de Tri", lien: "lecon2.html" },
    { titre: "Leçon 03: Structures de données", lien: "lecon3.html" },
    { titre: "Leçon 04: Structures de données avancées", lien: "lecon4.html" },
    { titre: "Leçon 05: Table de hachage", lien: "lecon5.html" },
    { titre: "Leçon 06: Graphe", lien: "lecon6.html" },
    { titre: "Leçon 07: Techniques classiques", lien: "lecon7.html" },
    { titre: "Leçon 08: Techniques de conception", lien: "lecon8.html" },
    { titre: "Bilan final ", lien: "bilan.html" },
  ];

  const navContainer = document.getElementById("nav-auto");

  if (!navContainer) {
    console.error("L'élément #nav-auto n'existe pas dans le DOM");
    return;
  }

  let navHTML = `
    <nav class="sidebar">
        <ul class="sidebar-menu">
    `;

  lecons.forEach(lecon => {
    // Déterminer si c'est la page active
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const isActive = currentPage === lecon.lien ? "active" : "";

    navHTML += `
            <li class="sidebar-item ${isActive}">
                <a href="${lecon.lien}" class="sidebar-link">
                    <span class="chevron">›</span>
                    <span class="title">${lecon.titre}</span>
                </a>
            </li>
        `;
  });

  navHTML += `
        </ul>
    </nav>
    `;

  navContainer.innerHTML = navHTML;
});
