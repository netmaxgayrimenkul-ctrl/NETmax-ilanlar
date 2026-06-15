/* =========================
   DATA
========================= */
const listingsData = [
    {
    id: 1,
    title: "Villa",
	situation: "Satılık",
    location: "Yunus Emre Mah / Aksaray",
    price: "21,000,000",
    currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/cografi/38.41535001960452/34.00645941495896",
    googlecoord: [34.006658, 38.415279],

    cardImage: "images/emin-acar_villa/19.jpeg",

    images: [
        "images/emin-acar_villa/1.jpeg",
        "images/emin-acar_villa/2.jpeg",
        "images/emin-acar_villa/3.jpeg",
        "images/emin-acar_villa/4.jpeg",
        "images/emin-acar_villa/5.jpeg",
        "images/emin-acar_villa/6.jpeg",
        "images/emin-acar_villa/7.jpeg",
        "images/emin-acar_villa/8.jpeg",
        "images/emin-acar_villa/9.jpeg",
        "images/emin-acar_villa/10.jpeg"
    ],

    alan: "365 m²",
    odaSayisi: "5",
    tapuDurumu: "İskana hazır",
    takas: "Var",

    aciklama:
        "TOKİ Bölgesinde\n" +
        "600 m² arsa alanlı"
},
    {
    id: 2,
    title: "Villa",
	situation: "Satılık",
    location: "Şifahane Mah / Aksaray",
    price: "14,500,000",
    currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/3459/15/1780053072749",
    googlecoord: [34.002306, 38.394939],

    cardImage: "images/hamza-aktürk_villa/2.jpg",

    images: [
        "images/hamza-aktürk_villa/1.jpg",
        "images/hamza-aktürk_villa/2.jpg",
        "images/hamza-aktürk_villa/3.jpg",
        "images/hamza-aktürk_villa/4.jpg",
        "images/hamza-aktürk_villa/5.jpg",
        "images/hamza-aktürk_villa/6.jpg",
        "images/hamza-aktürk_villa/7.jpg",
        "images/hamza-aktürk_villa/8.jpg",
        "images/hamza-aktürk_villa/9.jpg",
        "images/hamza-aktürk_villa/10.jpg",
        "images/hamza-aktürk_villa/11.jpg",
        "images/hamza-aktürk_villa/12.jpg",
        "images/hamza-aktürk_villa/13.jpg",
        "images/hamza-aktürk_villa/14.jpg",
        "images/hamza-aktürk_villa/15.jpg",
        "images/hamza-aktürk_villa/16.jpg",
        "images/hamza-aktürk_villa/17.jpg",
        "images/hamza-aktürk_villa/18.jpg"
    ],

    odaSayisi: "2",
    tapuDurumu: "Müstakil Tapulu",
	
	aciklama:
        "Modern taş kaplama dış cephe\n" +
        "Müstakil kullanım alanı\n" +
		"Geniş ve ferah salon\n" +
		"Şık ada mutfak tasarımı\n" +
		"Modern banyo & duş sistemi\n" +
		"Giyinme dolabı & geniş depolama alanları\n" +
		"Kaliteli işçilik & lüks malzeme\n" +
		"Taşınmaya hazır"
},
{
    id: 3,
    title: "Arsa",
	situation: "Satılık",
    location: "Çiftlik Mah / Aksaray",
    price: "200 / m²",
    currency: "EUR",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126920/3895/17/1780080472621",
    googlecoord: [33.992214, 38.39065],

    cardImage: "images/3895-17/3895-17.png",

    images: [
		"images/3895-17/3895-17.png"
    ],
	adaParsel: "3895 / 17",
    alan: "816,15 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu"
},
{
    id: 4,
    title: "Arsa",
	situation: "Satılık",
    location: "Yunus Emre Mah / Aksaray",
    price: "9000 / m²",
    currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126926/4881/10/1780085436359",
    googlecoord: [34.005762, 38.415245],

    cardImage: "images/4881-10/4881-10.png",

    images: [
		"images/4881-10/4881-10.png"
    ],
	adaParsel: "4881 / 10",
    alan: "562,10 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu"
},
{
    id: 5,
    title: "Dükkan",
	situation: "Satılık",
    location: "Büyük Bölcek Mah / Aksaray",
    price: "Uygun Fiyat",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126914/4468/5/1780087466714",
    googlecoord: [34.008074, 38.369431],

    cardImage:  "images/emin-acar_dukkan/1.jpeg",

    images: [
		"images/emin-acar_dukkan/1.jpeg",
		"images/emin-acar_dukkan/2.jpeg",
		"images/emin-acar_dukkan/3.jpeg",
		"images/emin-acar_dukkan/4.jpeg",
		"images/emin-acar_dukkan/5.jpeg"
    ],
	adaParsel: "4468 / 5",
    alan: "258 m²",
	imarDurumu: "Fırın Ruhsatlı",
	kullanimDurumu: "Kiracı",
	tapuDurumu: "Müstakil Tapu",
	takas: "Var",
	
	aciklama:
        "2 adet dükkan\n" +
		"Arsa yada araba takaslı" 
		
},
{
    id: 6,
    title: "Arsa",
	situation: "Satılık",
    location: "Yavuz Sultan Selim Mah / Aksaray",
    price: "4,230,000",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/177/14/1780134786018",
    googlecoord: [34.029808, 38.332904],

    cardImage:  "images/177-14/177-14.png",

    images: [
		"images/177-14/177-14.png"
    ],
	adaParsel: "177 / 14",
    alan: "760,67 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu",
		
},
{
    id: 7,
    title: "Arsa",
	situation: "Satılık",
    location: "Sağlık Kasabası / Aksaray",
    price: "2,150,000",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/611/11/1780135825744",
    googlecoord: [34.05617, 38.293525],

    cardImage:  "images/saglik_611-11/611-11.png",

    images: [
		"images/saglik_611-11/611-11.png"
    ],
	adaParsel: "611 / 11",
    alan: "690 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu",
		
},
{
    id: 8,
    title: "Arsa",
	situation: "Satılık",
    location: "Yunus Emre Mah / Aksaray",
    price: "170 / m²",
	currency: "EUR",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126926/5128/6/1780336518857",
    googlecoord: [34.006886, 38.414458],

    cardImage:  "images/5128-6/5128-6.png",

    images: [
		"images/5128-6/5128-6.png"
    ],
	adaParsel: "5128 / 6",
    alan: "550,55 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu",
		
},
{
    id: 9,
    title: "Daire",
	situation: "Satılık 4+1",
    location: "Hacılarharmanı Mah / Aksaray",
    price: "5,700,000",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/cografi/38.36049680758717/34.005354344844825",
    googlecoord: [34.005352, 38.360467],

    cardImage:  "images/2528-8/1.jpeg",

    images: [
		"images/2528-8/2.jpeg",
		"images/2528-8/3.jpeg",
		"images/2528-8/4.jpeg",
		"images/2528-8/5.jpeg",
		"images/2528-8/6.jpeg",
		"images/2528-8/7.jpeg",
		"images/2528-8/8.jpeg",
		"images/2528-8/9.jpeg"
    ],
    metrekareBrut: "180 m²",
	odaSayisi: "4+1",
	binaYasi: "10",
	kat: "3",
	toplamKat: "4",
	isitma: "Kombi bireysel",
	balkon: "Var",
	asansor: "Var",
	otopark: "Kapalı",
	kullanimDurumu: "Boş",
	tapuDurumu: "Eşi ve kendisi",
	site: "Hayır"
		
},
{
    id: 10,
    title: "Daire",
	situation: "Satılık 3+1",
    location: "Coğlaki Mah / Aksaray",
    price: "3,650,000",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126968/6040/1/1780253174921",
    googlecoord: [34.032568, 38.3735],

    cardImage:  "images/6040-1/1.jpeg",

    images: [
		"images/6040-1/3.jpeg",
		"images/6040-1/4.jpeg",
		"images/6040-1/5.jpeg",
		"images/6040-1/6.jpeg",
		"images/6040-1/7.jpeg",
		"images/6040-1/8.jpeg",
		"images/6040-1/9.jpeg",
		"images/6040-1/10.jpeg",
		"images/6040-1/11.jpeg",
		"images/6040-1/12.jpeg",
    ],
    metrekareBrut: "150 m²",
	odaSayisi: "3+1",
	binaYasi: "20 Yaş üstü",
	kat: "Zemin(Yüksek Giriş)",
	toplamKat: "5",
	isitma: "Kombi bireysel",
	balkon: "Var",
	asansor: "Var",
	otopark: "Açık",
	kullanimDurumu: "Boş",
	tapuDurumu: "Müstakil",
	site: "Hayır"
		
},
{
    id: 11,
    title: "Arsa",
	situation: "Satılık",
    location: "Yeni Mah / Aksaray",
    price: "95 / m²",
	currency: "EUR",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/6936/8/1780337251903",
    googlecoord: [33.973863, 38.402697],

    cardImage:  "images/6936-8/6936-8.png",

    images: [
		"images/6936-8/6936-8.png"
    ],
	adaParsel: "6936 / 8",
    alan: "1537,06 m²",
	imarDurumu: "Konut Alanı",
	tapuDurumu: "Müstakil Tapu",
		
},
{
    id: 12,
    title: "Arsa",
	situation: "Satılık",
    location: "Somuncubaba Mah / Aksaray",
    price: "420 / m²",
	currency: "EUR",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/7001/5/1780338144480",
    googlecoord: [33.98339, 38.398241],

    cardImage:  "images/7001-5/7001-5.png",

    images: [
		"images/7001-5/7001-5.png"
    ],
	adaParsel: "7001 / 5",
    alan: "1635,19 m²",
	imarDurumu: "Ticaret Konut Alanı",
	tapuDurumu: "Müstakil Tapu",
		
},
{
    id: 13,
    title: "Daire",
	situation: "Satılık 1+1",
    location: "Küçükbölcek Mah / Aksaray",
    price: "2,700,000 & 2,250,000",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126918/4445/5/1780341870871",
    googlecoord: [33.998953, 38.378639],

    cardImage:  "images/bayram-kav/1.jpeg",

    images: [
		"images/bayram-kav/1.jpeg",
		"images/bayram-kav/2.jpeg",
		"images/bayram-kav/3.jpeg",
		"images/bayram-kav/4.jpeg",
		"images/bayram-kav/5.jpeg",
		"images/bayram-kav/6.jpeg",
		"images/bayram-kav/7.jpeg",
		"images/bayram-kav/8.jpeg",
		"images/bayram-kav/9.jpeg",
		"images/bayram-kav/10.jpeg",
		"images/bayram-kav/11.jpeg",
		"images/bayram-kav/12.jpeg",
		"images/bayram-kav/13.jpeg",
		"images/bayram-kav/14.jpeg"
    ],
    metrekareBrut: "40 m² ile 56 m²",
	odaSayisi: "1+1",
	binaYasi: "1",
	kat: "4 ve 5.Kat",
	toplamKat: "5",
	isitma: "Kombi bireysel",
	balkon: "Var",
	asansor: "Var (2 adet)",
	otopark: "Kapalı",
	kullanimDurumu: "Boş",
	tapuDurumu: "Müstakil",
	site: "Hayır",
	
	aciklama:
        "Görüntülü diyafon\n" +
		"Çelik kapı\n" +
		"Lake iç kapılar\n" +
		"AGT laminant parke\n" +
		"Kaliteli duvar kağıdı\n" +
		"Mutfak dolabı\n" +
		"Beko marka ankastre\n" +
		"Şık banyo dolabı\n" +
		"Duşakabin\n" +
		"aciklama2\n" +
		"4.kat 28 BM Satılık 2,250\n" + 
		"4.kat 29 M  Satılık eşyasız 2,700\n" +  
		"4.kat 31 B  Satılık 2,300->2,100\n" + 
		"5.kat 41 M  Satılık eşyasız 2,300->2,100\n" + 
		"5.kat 42 M  Satılık eşyasız 2,700\n" + 
		"5.kat 43 M  Satılık eşyasız 2,300->2,100\n" +
		"5.kat 45 M  Satılık eşyasız 2,300->2,100" 
},
{
    id: 14,
    title: "Daire",
	situation: "Kiralık 1+1",
    location: "Küçükbölcek Mah / Aksaray",
    price: "16,500 & 12,500",
	currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126918/4445/5/1780341870871",
    googlecoord: [33.999061, 38.37868],

    cardImage:  "images/bayram-kav/1.jpeg",

    images: [
		"images/bayram-kav/1.jpeg",
		"images/bayram-kav/2.jpeg",
		"images/bayram-kav/3.jpeg",
		"images/bayram-kav/4.jpeg",
		"images/bayram-kav/5.jpeg",
		"images/bayram-kav/6.jpeg",
		"images/bayram-kav/7.jpeg",
		"images/bayram-kav/8.jpeg",
		"images/bayram-kav/9.jpeg",
		"images/bayram-kav/10.jpeg",
		"images/bayram-kav/11.jpeg",
		"images/bayram-kav/12.jpeg",
		"images/bayram-kav/13.jpeg",
		"images/bayram-kav/14.jpeg",
    ],
    metrekareBrut: "Muhtelif m²",
	odaSayisi: "1+1",
	binaYasi: "1",
	kat: "4 ve 5.Kat",
	toplamKat: "5",
	isitma: "Kombi bireysel",
	balkon: "Var",
	asansor: "Var (2 adet)",
	otopark: "Kapalı",
	kullanimDurumu: "Boş",
	tapuDurumu: "Müstakil",
	site: "Hayır",
	
	aciklama:
        "Görüntülü diyafon\n" +
		"Çelik kapı\n" +
		"Lake iç kapılar\n" +
		"AGT laminant parke\n" +
		"Kaliteli duvar kağıdı\n" +
		"Mutfak dolabı\n" +
		"Beko marka ankastre\n" +
		"Şık banyo dolabı\n" +
		"Duşakabin\n" +
		"aciklama2\n" +
		"4.kat 30 BA Kiralık eşyasız 12->11 bin\n" + 
		"4.kat 34 B  Kiralık eşyalı 16,5->15 bin\n" + 
		"5.kat 37 B  Kiralık eşyalı 16,5->15 bin\n" + 
		"5.kat 40 BA Kiralık eşyasız 12->11 bin\n" +
		"5.kat 44 BA Kiralık eşyasız 12,5->12 bin" 
}
 
  
];


/* =========================
   ELEMENT
========================= */
const listingsContainer = document.querySelector(".listings");

/* =========================
   FİYAT FORMAT
========================= */
function formatPrice(price, currency) {
  let symbol, locale;

  switch(currency) {
    case "EUR":
      symbol = "€";
      locale = "de-DE";
      break;
    case "USD":
      symbol = "$";
      locale = "en-US";
      break;
    case "TRY":
    default:
      symbol = "₺";
      locale = "tr-TR";
      break;
  }

  return symbol + " " + price.toLocaleString(locale);
}

/* =========================
   KATEGORİLER
========================= */
function getCategories() {
  return ["Arsa", "Dükkan", "Daire", "Villa"];
}

/* =========================
   RENDER KATEGORİLER
========================= */
function renderCategories(lastUpdate = "01.06.2026") {
  listingsContainer.innerHTML = "";

  // --- ÜST BAŞLIK ---
  const titleBar = document.createElement("div");
  titleBar.className = "category-title-bar";
  titleBar.innerHTML = "🏷️&nbsp;&nbsp;İlan Kategorileri";
  listingsContainer.appendChild(titleBar);

  // --- Kategori Listesi ---
  const wrapper = document.createElement("div");
  wrapper.className = "category-grid";

  getCategories().forEach(title => {
    const count = listingsData.filter(item => item.title === title).length;

    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `${title}<span class="count">(${count})</span>`;
    card.onclick = () => renderCategoryListings(title);

    wrapper.appendChild(card);
  });

  listingsContainer.appendChild(wrapper);

  // --- ALTTA SON GÜNCELLEME ---
  const updateBar = document.createElement("div");
  updateBar.className = "update-date";
  updateBar.textContent = `Son Güncelleme: ${lastUpdate}`;
  listingsContainer.appendChild(updateBar);
  
  // --- HARİTA BUTONU ---
  const mapBtn = document.createElement("button");
  mapBtn.className = "enter-btn";
  mapBtn.innerHTML = `<span style="font-size:20px; line-height:1; margin-right:6px;">🌍</span>İlanlar - Harita`;

  mapBtn.onclick = () => {
    window.open("tum-ilanlar.html", "_blank");
  };

  listingsContainer.appendChild(mapBtn);

  // =========================
  //   ALTTA GERİ İKONU
  // =========================
  const backWrap = document.createElement("div");
  backWrap.className = "back-wrap";

  const backBtn = document.createElement("button");
  backBtn.className = "enter-btn back-btn";
  backBtn.innerHTML = "👈 Geri";

  backBtn.onclick = () => {
    const intro = document.getElementById("introScreen") || document.getElementById("intro");
    if (!intro) return;

    intro.style.display = "flex";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.transition = "opacity .3s ease";
      intro.style.opacity = "1";
    }, 10);
  };

  backWrap.appendChild(backBtn);
  listingsContainer.appendChild(backWrap);
}

/* =========================
   KATEGORİ İLANLARI
========================= */
function renderCategoryListings(title, forceSituation = null) {
  listingsContainer.innerHTML = "";

  // 1. Daire Kategorisi İçin Filtreleme Kontrolü
  if (title === "Daire" && !forceSituation) {
    const categoryBar = document.createElement("div");
    categoryBar.className = "category-bar";
    categoryBar.innerHTML = `<span class="back-btn">← Kategorilere Dön</span><span class="category-title">Daire Tipi Seçin</span>`;
    categoryBar.querySelector(".back-btn").onclick = () => renderCategories();
    listingsContainer.appendChild(categoryBar);

    const wrapper = document.createElement("div");
    wrapper.className = "category-grid";
    
    const situations = [...new Set(listingsData.filter(item => item.title === "Daire").map(item => item.situation))];
    
    situations.forEach(sit => {
      const card = document.createElement("div");
      card.className = "category-card";
      const count = listingsData.filter(item => item.title === "Daire" && item.situation === sit).length;
      card.innerHTML = `${sit}<span class="count">(${count})</span>`;
      card.onclick = () => renderCategoryListings("Daire", sit);
      wrapper.appendChild(card);
    });
    listingsContainer.appendChild(wrapper);
    return;
  }

  // 2. Normal Listeleme
  const categoryBar = document.createElement("div");
  categoryBar.className = "category-bar";
  categoryBar.innerHTML = `
    <span class="back-btn">← ${forceSituation ? "Daire Seçimine Dön" : "Kategorilere Dön"}</span>
    <span class="category-title">${forceSituation ? title + " (" + forceSituation + ")" : title}</span>
  `;

  categoryBar.querySelector(".back-btn").onclick = () => {
    if (forceSituation) {
      renderCategoryListings("Daire");
    } else {
      renderCategories();
    }
  };

  categoryBar.querySelector(".category-title").classList.add("active");
  listingsContainer.appendChild(categoryBar);

  const spacer = document.createElement("div");
  spacer.style.height = "10px";
  listingsContainer.appendChild(spacer);

  const fragment = document.createDocumentFragment();

  listingsData
    .filter(item => forceSituation ? (item.title === title && item.situation === forceSituation) : (item.title === title))
    .forEach(item => {
      const card = document.createElement("article");
      card.className = "card";
      const img = item.cardImage || item.images?.[0] || "";

      card.innerHTML = `
        <img src="${img}" loading="lazy" alt="İlan" class="card-img">
        <div class="card-body">
            <h3 class="card-title">
                ${item.title} -&nbsp;
                <span style="color:#cd853f !important;">${item.situation}</span>
                <span class="card-id">İlan Id: ${item.id}</span>
            </h3>
            <p class="location">${item.location}</p>
            <div class="price">${formatPrice(item.price, item.currency)}</div>
            <button class="detail-btn" data-id="${item.id}">Detay &nbsp;&nbsp;🔍</button>
        </div>
      `;
      card.style.opacity = 0;
      card.style.transform = "translateY(10px)";
      card.style.transition = "all 0.25s ease";
      fragment.appendChild(card);
    });

  listingsContainer.appendChild(fragment);

  // Animasyon
  const cards = listingsContainer.querySelectorAll(".card");
  cards.forEach(card => {
    const img = card.querySelector(".card-img");
    if (img.complete) {
      requestAnimationFrame(() => { card.style.opacity = 1; card.style.transform = "translateY(0)"; });
    } else {
      img.addEventListener("load", () => {
        requestAnimationFrame(() => { card.style.opacity = 1; card.style.transform = "translateY(0)"; });
      });
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================
   MODAL TEKİL FONKSİYON 
========================= */
function setField(el, label, value) {
  if (value && value !== "-") {
    el.innerHTML = `${label} <span class="value-colored">${value}</span>`;
    el.style.display = "";
  } else {
    el.style.display = "none";
  }
}

// 🟩 MODALI VERİLERLE DOLDURAN VE AÇAN TEK ANA FONKSİYON
function openListingModal(item) {
  currentImages = item.images;
  currentIndex = 0;
  showImage(0);

  modalTitle.textContent = item.title;
  modalLocation.textContent = item.location;
  modalPrice.textContent = formatPrice(item.price, item.currency);

  setField(odaSayisi,       "Oda Sayısı", item.odaSayisi);
  setField(metrekareBrut,   "m² Brüt", item.metrekareBrut);
  setField(metrekareNet,    "m² Net", item.metrekareNet);
  setField(adaParsel,       "Ada / Parsel", item.adaParsel);
  setField(alan,            "Alan", item.alan);
  setField(kat,             "Bulunduğu Kat", item.kat);
  setField(balkon,          "Balkon", item.balkon);
  setField(binaYasi,        "Bina Yaşı", item.binaYasi);
  setField(imarDurumu,      "İmar Durumu", item.imarDurumu);
  setField(takas,           "Takas", item.takas);
  setField(isitma,          "Isıtma", item.isitma);
  setField(asansor,         "Asansör", item.asansor);
  setField(otopark,         "Otopark", item.otopark);
  setField(site,            "Site İçerisinde", item.site);
  setField(esyali,          "Eşyalı", item.esyali);
  setField(toplamKat,       "Kat Sayısı", item.toplamKat);
  setField(kullanimDurumu,  "Kullanım Durumu", item.kullanimDurumu);
  setField(tapuDurumu,      "Tapu Durumu", item.tapuDurumu);

  // --- AÇIKLAMA ---
  if (item.aciklama && item.aciklama.trim() !== "") {
    detailsBtn.classList.remove("hidden");
    modalFeatures.style.display = "none";
    modalFeatures.classList.remove("show");

    const lines = item.aciklama.split("\n");
    let secondPart = false;

    modalFeatures.innerHTML = lines.map(line => {
      if (line.trim() === "aciklama2") {
        secondPart = true;
        return "";
      }
      return `<div>${secondPart ? "•" : "✔"} ${line}</div>`;
    }).join("");

    detailsBtn.onclick = () => {
      if (modalFeatures.style.display === "none") {
        modalFeatures.style.display = "block";
        setTimeout(() => modalFeatures.classList.add("show"), 10);
        detailsBtn.textContent = "Kapat";
      } else {
        modalFeatures.classList.remove("show");
        setTimeout(() => { modalFeatures.style.display = "none"; }, 200);
        detailsBtn.textContent = "Açıklamalar";
      }
    };
  } else {
    detailsBtn.classList.add("hidden");
    modalFeatures.style.display = "none";
    modalFeatures.innerHTML = "";
    detailsBtn.onclick = null;
  }

  // --- PARSEL ---
  if (item.parcelUrl) {
    parcelBtn.classList.remove("hidden");
    parcelBtn.href = item.parcelUrl;
  } else {
    parcelBtn.classList.add("hidden");
    parcelBtn.removeAttribute("href");
    parcelBtn.onclick = (e) => e.preventDefault();
  }

  // 🔥 WHATSAPP BUTONU (Yazım ve Tırnak Hataları Tamamen Giderildi)
  const whatsappBtn = document.getElementById("whatsappShareBtn");
  if (whatsappBtn) {
    whatsappBtn.onclick = function() {
      const shareUrl = `${window.location.origin}${window.location.pathname}?ilan=${item.id}`;
      
      const alanMetni = item.alan ? `📐 *Alan:* ${item.alan}\n` : '';
      const odaMetni = item.odaSayisi ? `🛏️ *Oda Sayısı:* ${item.odaSayisi}\n` : '';
      
      const message = `📢 *${item.title} - ${item.situation}*\n\n💰 *Fiyat:* ${formatPrice(item.price, item.currency)}\n📍 *Konum:* ${item.location}\n${alanMetni}${odaMetni}\n🔗 *İlan Detayları ve Fotoğraflar İçin Tıklayın:*\n${shareUrl}`;

      const encodedMessage = encodeURIComponent(message);
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      let whatsappUrl = isMobile 
        ? `https://api.whatsapp.com/send?text=${encodedMessage}`
        : `https://web.whatsapp.com/send?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    };
  }

  modalOverlay.style.display = "flex";
}

// Kartlardaki detay butonunu yakalayan olay dinleyicisi
document.addEventListener("click", e => {
  const btn = e.target.closest(".detail-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const item = listingsData.find(i => i.id === id);
  if (!item) return;

  openListingModal(item);
});

/* =========================
   SLIDER
========================= */
function showImage(index) {
  sliderImage.src = currentImages[index];
  prevBtn.style.display = index === 0 ? "none" : "flex";
  nextBtn.style.display = index === currentImages.length - 1 ? "none" : "flex";
}

prevBtn.onclick = e => {
  e.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
};

nextBtn.onclick = e => {
  e.stopPropagation();
  if (currentIndex < currentImages.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
};

/* =========================
   BAŞLAT VE DIŞ BAĞLANTI KONTROLÜ
========================= */
renderCategories();

// Sayfa yüklendiğinde URL'deki ilan ID'sini denetleyen kısım
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlIlanId = urlParams.get('ilan');

  if (urlIlanId) {
    const hedefIlan = listingsData.find(item => item.id === Number(urlIlanId));
    if (hedefIlan) {
      const intro = document.getElementById("introScreen") || document.getElementById("intro");
      if (intro) intro.style.display = "none"; 
      
      openListingModal(hedefIlan);
    }
  }
});
/* =========================
   MODAL KAPATMA – FIX
========================= */

// KAPAT BUTONU
closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// ARKA PLAN TIKLAMA
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});


document.addEventListener("DOMContentLoaded", () => {
      const intro = document.getElementById("introScreen");
      const btn = document.getElementById("enterBtn");

      btn.addEventListener("click", () => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity .4s ease";

        setTimeout(() => {
          intro.style.display = "none";
        }, 400);
      });
    });
	
const slogans = [
  "Aksaray’da Güvenilir Gayrimenkul",
  "Doğru Yatırım, Doğru Adres",
  "Hayalinizdeki Mülk Bir Adım Uzakta",
  "NETmax’ta Güvenle Al, Güvenle Sat"
];

let sloganIndex = 0;
const sloganEl = document.getElementById("introSlogan");

const NORMAL_DURATION = 7000;   // normal slogan süresi
const SPECIAL_DURATION = 10000; // 👈 özel slogan (küçülerek çıkması için UZUN)

function playSlogan() {
  const text = slogans[sloganIndex];

  // classları temizle
  sloganEl.classList.remove("special");

  let duration = NORMAL_DURATION;

  if (text === "NETmax’ta Güvenle Al, Güvenle Sat") {
    // 👉 ÖZEL SLOGAN
    sloganEl.innerHTML = `" <span class="slogan-highlight">${text}</span> "`;
    sloganEl.classList.add("special");
    duration = SPECIAL_DURATION;   // 👈 ANİMASYON TAM BİTSİN
  } else {
    sloganEl.textContent = `"${text}"`;
  }

  // animasyonu sıfırla
  sloganEl.classList.remove("animate");
  void sloganEl.offsetWidth;
  sloganEl.classList.add("animate");

  sloganIndex = (sloganIndex + 1) % slogans.length;
  setTimeout(playSlogan, duration);
}

playSlogan();

// Mevcut tüm kodlarının en altına, </body> etiketinden hemen önce ekle:
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isShared = urlParams.get('from') === 'whatsapp'; // Linkte whatsapp işareti var mı?

    // 1. Eğer WhatsApp'tan gelindiyse Kapat butonunu yok et
    if (isShared) {
        const closeBtn = document.getElementById("closeModal");
        if (closeBtn) {
            closeBtn.remove(); // Butonu HTML'den tamamen siler
        }
    }

    // 2. Paylaş butonuna tıklandığında linki ayarla
    const shareBtn = document.getElementById("whatsappShareBtn");
    if (shareBtn) {
        shareBtn.addEventListener("click", function() {
            // Tarayıcıdaki mevcut linkin sonuna otomatik olarak &from=whatsapp ekler
            const mevcutIlanId = urlParams.get('id') || ""; 
            const temizLink = `${window.location.origin}${window.location.pathname}?id=${mevcutIlanId}&from=whatsapp`;
            
            const mesaj = `İlanı incelemek için bağlantıya tıklayın: ${temizLink}`;
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(mesaj)}`, '_blank');
        });
    }
});
