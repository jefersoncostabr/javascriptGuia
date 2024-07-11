let minhaArray = ["maria", "pedro", "ana", "antônio", "zé"];

//chave = em qual chave será procurado
//lista = nome da array
function buscaNaLista(lista, itemProcurado) {
	const itemEncontrado = lista.find((item) => item === itemProcurado);
	const indexDoItem = minhaArray.findIndex((item) => item === itemProcurado);

	if (itemEncontrado) {
		console.log(`Item encontrado: ${itemEncontrado}`);
		console.log(`Index do item encontrado: ${indexDoItem}`);
		console.log(`Posição do item encontrado: ${indexDoItem + 1}`);
	} else {
		console.log("Item não encontrado");
	}
}

buscaNaLista(minhaArray, "antônio");

function ordena(lista) {
	return lista.sort((a, b) => {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	});
}

const listaOrdenada = ordena(minhaArray);
console.log(listaOrdenada);
