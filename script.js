document.querySelector('button').addEventListener('click', clicFun)



function clicFun() {
	let a = document.querySelector('.inputOne').value;
	console.log(a);
document.querySelector('.divOne').innerHTML += a;

}
