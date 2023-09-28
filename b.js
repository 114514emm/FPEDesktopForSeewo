const output = document.querySelector('#output-content')
const label = document.querySelector('#convert')
label.addEventListener("change", (e) => { 
	const file = e.target.files[0]
	const reader = new FileReader()
	reader.readAsDataURL(file);
	reader.onload = async function(e){
		const base64URL = e.target.result
		await navigator.clipboard.writeText(base64URL)
		output.textContent = '复制成功'
	}
});