const Firms = () => {
  const data = [
    {
      "_id": "65343222b67e9681f937f302",
      "name": "BOYNER",
      "phone": "0212 444 00 54",
      "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boyner_Logo.jpg/800px-Boyner_Logo.jpg",
      "createdAt": "2024-01-06T07:37:02.253Z",
      "updatedAt": "2024-01-06T07:37:02.253Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f303",
      "name": "FLO",
      "phone": "0212 444 22 23",
      "address": "Mahmutbey, Taşocağı Yolu Cad. No:24, 34218 Bağcılar/İstanbul, Türkiye",
      "image": "https://akillifabrikalar.com.tr/wp-content/uploads/2021/11/Floo2.png",
      "createdAt": "2024-01-06T07:37:02.257Z",
      "updatedAt": "2024-01-06T07:37:02.257Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f304",
      "name": "HEPSIBURADA",
      "phone": "0212 444 44 33",
      "address": "Kuştepe, Kule 5, Mecidiyeköy Yolu Cd. Trump Towers No:12 Kat 18, 34387 Şişli/İstanbul, Türkiye",
      "image": "https://logowik.com/content/uploads/images/hepsiburada1183.jpg",
      "createdAt": "2024-01-06T07:37:02.259Z",
      "updatedAt": "2024-01-06T07:37:02.259Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f305",
      "name": "Trendyol",
      "phone": "0212 444 22 22",
      "address": "Maslak, Büyükdere Cd. No:237, 34485 Sarıyer/İstanbul, Türkiye",
      "image": "https://seeklogo.com/images/T/trendyol-logo-EE0DAED204-seeklogo.com.png",
      "createdAt": "2024-01-06T07:37:02.261Z",
      "updatedAt": "2024-01-06T07:37:02.261Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f310",
      "name": "n11",
      "phone": "0212 444 22 66",
      "address": "Mahmutbey, Taşocağı Yolu Cad. No:24, 34218 Bağcılar/İstanbul, Türkiye",
      "image": "https://i.pinimg.com/originals/af/d7/12/afd7126448b385ea3013d41797adde20.png",
      "createdAt": "2024-01-06T07:37:02.263Z",
      "updatedAt": "2024-01-06T07:37:02.263Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f315",
      "name": "Morhipo",
      "phone": "0212 444 44 44",
      "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye",
      "image": "https://upload.wikimedia.org/wikipedia/tr/archive/3/32/20181016101908%21Morhipo.png",
      "createdAt": "2024-01-06T07:37:02.265Z",
      "updatedAt": "2024-01-06T07:37:02.265Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f333",
      "name": "ÜLker",
      "phone": "2124445566",
      "address": "Kısıklı, Ferah Cd. No:1, 34692 Üsküdar/İstanbul, Türkiye",
      "image": "https://www.ulker.com.tr/documents/ulker-logo.png",
      "createdAt": "2024-01-06T07:37:02.267Z",
      "updatedAt": "2024-01-06T07:37:02.267Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f334",
      "name": "Eti",
      "phone": "0212 444 00 53",
      "address": "Uğur Mumcu, 2271. Sk. No:15, 34270 Sultangazi/İstanbul, Türkiye",
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Eti_logo.png",
      "createdAt": "2024-01-06T07:37:02.293Z",
      "updatedAt": "2024-01-06T07:37:02.293Z",
      "__v": 0
    },
    {
      "_id": "65343222b67e9681f937f335",
      "name": "Çetinkaya",
      "phone": "0212 444 00 55",
      "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1Mug9ruTOC1x8LGeNAr-ouWrWm29Z6u91QMU8ZfE&s",
      "createdAt": "2024-01-06T07:37:02.296Z",
      "updatedAt": "2024-01-06T07:37:02.296Z",
      "__v": 0
    }
  ]

  return (
    <div>
      <h1>Firms</h1>
      {data.map((firm) => (
        <div key={firm._id}>
          <h2>{firm.name}</h2>
          <p>Phone: {firm.phone}</p>
          <p>Address: {firm.address}</p>
          <img src={firm.image} alt={firm.name} style={{ maxWidth: '200px' }} />
        </div>
      ))}
    </div>
  );
};
  
 

export default Firms;