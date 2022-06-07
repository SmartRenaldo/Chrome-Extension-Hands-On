document.getElementById("autoFill").addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tele: document.getElementById("tele").value,
        address_1: document.getElementById("address_1").value,
        address_2: document.getElementById("address_2").value,
        address_3: document.getElementById("address_3").value,
        city: document.getElementById("city").value,
        postcode: document.getElementById("postcode").value,
        country: document.getElementById("country").value,
        card_number: document.getElementById("card_number").value,
        card_month: document.getElementById("card_month").value,
        card_year: document.getElementById("card_year").value,
        card_cvv: document.getElementById("card_cvv").value,
      }, function (res) {
        console.log(res.status);
      })
    }
  )
})

document.getElementById('save').addEventListener('click', () => {
  chrome.storage.sync.set({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tele: document.getElementById("tele").value,
    address_1: document.getElementById("address_1").value,
    address_2: document.getElementById("address_2").value,
    address_3: document.getElementById("address_3").value,
    city: document.getElementById("city").value,
    postcode: document.getElementById("postcode").value,
    country: document.getElementById("country").value,
    card_number: document.getElementById("card_number").value,
    card_month: document.getElementById("card_month").value,
    card_year: document.getElementById("card_year").value,
    card_cvv: document.getElementById("card_cvv").value,
  }, function () {
    console.log("Saved");
  })
})

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'name',
		'email',
		'tele',
		'address_1',
		'address_2',
		'address_3',
		'city',
		'postcode',
		'country',
		'card_number',
		'card_month',
		'card_year',
		'card_cvv'
	], function(result) {
		document.getElementById('name').value = result.name;
		document.getElementById('email').value = result.email;
		document.getElementById('tele').value = result.tele;
		document.getElementById('address_1').value = result.address_1;
		document.getElementById('address_2').value = result.address_2;
		document.getElementById('address_3').value = result.address_3;
		document.getElementById('city').value = result.city;
		document.getElementById('postcode').value = result.postcode;
		document.getElementById('country').value = result.country;
		document.getElementById('card_number').value = result.card_number;
		document.getElementById('card_month').value = result.card_month,
		document.getElementById('card_year').value = result.card_year,
		document.getElementById('card_cvv').value = result.card_cvv;
	});
});