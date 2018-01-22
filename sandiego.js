var alturas = ["Altura media", "Altura baja", "Altura alta"];
var coloresDeCabello = ["Cabello marrón", "Cabello negro", "Cabello rubio", "Cabello rojo"];
var coloresDeOjos = ["Ojos marrones", "Ojos azules", "Ojos verdes"];
var coloresDeTez = ["Tez blanca", "Tez oscura", "Tez asiática"];
var contexturas = ["Cuerpo Delgado", "Cuerpo relleno", "Cuerpo grande"];
var formasDeCabello = ["Cabello ondulado", "Cabello lacio", "Cabello enrulado"];
var sexos = ["Sexo masculino", "Sexo femenino"];

var sospechoso1 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
var sospechoso2 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
var sospechoso3 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
var sospechoso4 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
var sospechoso5 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
var sospechosos = [sospechoso1, sospechoso2, sospechoso3, sospechoso4, sospechoso5];

var argentina = new Pais("Argentina");
var uruguay = new Pais("Uruguay");
var chile = new Pais("Chile");
var brasil = new Pais("Brasil");
var bolivia = new Pais("Bolivia");
var paraguay = new Pais("Paraguay");
var peru = new Pais("Peru");
var colombia = new Pais("Colombia");
var venezuela = new Pais("Venezuela");
var ecuador = new Pais("Ecuador");
var guyana = new Pais("Guyana");
var guayanaFrancesa = new Pais("Guayana Francesa");
var surinam = new Pais("Surinam");
var islasMalvinas = new Pais("Islas Malvinas");
var paises = [argentina, bolivia, brasil, chile, colombia, ecuador, guyana, guayanaFrancesa, paraguay, peru, surinam, uruguay, venezuela, islasMalvinas];

var detective = new Detective(argentina);
var culpable = new Culpable(sospechosos[Math.floor(Math.random() * sospechosos.length)]);


function Sospechoso(altura, colorDeCabello, colorDeTez, contextura, formaDeCabello, colorDeOjos, sexo) {
	this.altura = altura;
	this.colorDeCabello = colorDeCabello;
	this.colorDeTez = colorDeTez;
	this.contextura = contextura;
	this.formaDeCabello = formaDeCabello;
	this.colorDeOjos = colorDeOjos;
	this.sexo = sexo;
	this.descripcion = [altura, colorDeCabello, colorDeTez, contextura, formaDeCabello, colorDeOjos, sexo];
}

function Culpable(unSospechoso) {
	this.altura = unSospechoso.altura;
	this.colorDeCabello = unSospechoso.colorDeCabello;
	this.colorDeTez = unSospechoso.colorDeTez;
	this.contextura = unSospechoso.contextura;
	this.formaDeCabello = unSospechoso.formaDeCabello;
	this.colorDeOjos = unSospechoso.colorDeOjos;
	this.sexo = unSospechoso.sexo;
	this.descripcion = [this.altura, this.colorDeCabello, this.colorDeTez, this.contextura, this.formaDeCabello, this.colorDeOjos, this.sexo];
	this.paisesVisitados;
	this.estuvoEnSietePaisesAlAzar = function() {
		this.paisesVisitados = [];
		this.paisesVisitados.push(argentina);
		argentina.elCulpablePasoPorAca();
		var unPais;
		var paisesDisponibles = paises.filter(function(pais) {
			return (!culpable.paisesVisitados.includes(pais));
		});
		for (var i=0; i < this.descripcion.length-1; i++) {
			unPais = paisesDisponibles[Math.floor(Math.random() * paisesDisponibles.length)];
			paisesDisponibles.splice(paisesDisponibles.indexOf(unPais), 1);
			this.paisesVisitados.push(unPais);
			unPais.elCulpablePasoPorAca();
		}
	}
}

function Juego(tiempoRestante, detective, culpable) {
	this.tiempoRestante = tiempoRestante;
	this.detective = detective;
	this.culpable = culpable;

}

function Detective(localizacion) {
	this.pistas = [];
	this.localizacionActual = localizacion
	this.tiempoRestante = 72;
	this.viajarA = function(localizacion) {
		this.tiempoRestante = this.tiempoRestante - 10;
		$("#tiempoEnPantalla").text(this.tiempoRestante);
		this.localizacionActual = localizacion;
		$("#paisEnPantalla").text(this.localizacionActual.nombre);
		chequearTiempo();
	}
	this.interrogarTestigo = function() {
			this.localizacionActual.testigo.darInformacionA(this);
			$("#tiempoEnPantalla").text(detective.tiempoRestante);
			chequearTiempo();
	}
	this.anotarPistaSobre = function(unCulpable) {
		var pistasFaltantes = unCulpable.descripcion.filter(function(pista) {
			return (!detective.pistas.includes(pista));
		});
		if (pistasFaltantes.length > 0) {
			this.pistas.push(pistasFaltantes[Math.floor(Math.random() * pistasFaltantes.length)]);
			mostrarPistas();
			pistasFaltantes = unCulpable.descripcion.filter(function(pista) {
				return (!detective.pistas.includes(pista));
			});
		} else {
			$("#todasPistasModal").modal("show");
		}
	}
	this.arrestarSospechosoNumero = function(index) {
		if (culpable.descripcion.every(function (x) {
			return sospechosos[index].descripcion.includes(x)
		})) {
			juegoTerminado();
			$("#juegoGanadoModal").modal("show");
		}else {
			juegoTerminado();
			$("#juegoPerdidoModal").modal("show");
		}
	}
	this.limpiarAgenda = function() {
		this.pistas = [];
	}
}


function TestigoQueVioAlCulpable() {
	this.puedeSerInterrogado = true;
	this.darInformacionA = function(detective) {
		if (this.puedeSerInterrogado) {
			detective.tiempoRestante = detective.tiempoRestante - 2;
			detective.anotarPistaSobre(culpable);
			this.puedeSerInterrogado = false;
		} else {
			$("#testigoUsadoModal").modal("show");
		}
	}
}


function TestigoQueNoVioAlCulpable() {
	this.puedeSerInterrogado = true;
	this.darInformacionA = function(detective) {
		if (this.puedeSerInterrogado) {
			detective.tiempoRestante = detective.tiempoRestante - 2;
			this.puedeSerInterrogado = false;
			$('#noTestigoModal').modal('show')
		} else {
			$("#testigoUsadoModal").modal("show");
		}
	}
}




function Pais(nombre) {
	this.nombre = nombre;
	this.tag = null;
	this.testigo = new TestigoQueNoVioAlCulpable();
	this.elCulpablePasoPorAca = function() {
		this.testigo = new TestigoQueVioAlCulpable();
	}
	this.renovarTestigo = function() {
		this.testigo = new TestigoQueNoVioAlCulpable();
	}
}

function initialize() {

	culpable.estuvoEnSietePaisesAlAzar();
	document.querySelector("ul .sam1").classList.toggle("active-region");
	$("#tiempoEnPantalla").text("72");
	$("#paisEnPantalla").text(detective.localizacionActual.nombre);
	for (var i=0; i < paises.length; i++) {
		paises[i].tag = document.querySelectorAll(".m")[i];
	};
	for (var i=0; i < paises.length; i++) {
		paises[i].tag.style.visibility = "visible";;
	};
	argentina.tag.style.visibility = "hidden";
	for(var i = 0; i < paises.length; i++){
		//IIFE
		(function(x) {
			paises[x].tag.addEventListener("click", function() {			
				detective.viajarA(paises[x]);
				paises[x].tag.style.visibility = "hidden";	
			});
			paises[x].tag.addEventListener("touchstart", function() {			
				detective.viajarA(paises[x]);
				paises[x].tag.style.visibility = "hidden";	
			});
		})(i)
	};
	$("#interrogacion").bind('touchstart click', function() {
		detective.interrogarTestigo();
	});
	$("#jugarOtraVezBoton").bind('touchstart click', function() {
		reiniciarJuego();
	});
	mostrarSospechosos();
}

function generarSospechosos() {
	sospechoso1 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
	sospechoso2 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
	sospechoso3 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
	sospechoso4 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
	sospechoso5 = new Sospechoso(alturas[Math.floor(Math.random() * alturas.length)], coloresDeCabello[Math.floor(Math.random() * coloresDeCabello.length)], coloresDeTez[Math.floor(Math.random() * coloresDeTez.length)], contexturas[Math.floor(Math.random() * contexturas.length)], formasDeCabello[Math.floor(Math.random() * formasDeCabello.length)], coloresDeOjos[Math.floor(Math.random() * coloresDeOjos.length)], sexos[Math.floor(Math.random() * sexos.length)]);
	sospechosos = [sospechoso1, sospechoso2, sospechoso3, sospechoso4, sospechoso5];
}

function mostrarSospechosos() {
	$("#alturas td").each(function(index) {
		$(this).text(sospechosos[index].altura);
	})
	$("#sexos td").each(function(index) {
		$(this).text(sospechosos[index].sexo);
	})
	$("#contexturas td").each(function(index) {
		$(this).text(sospechosos[index].contextura);
	})
	$("#coloresDeOjos td").each(function(index) {
		$(this).text(sospechosos[index].colorDeOjos);
	})
	$("#coloresDeCabello td").each(function(index) {
		$(this).text(sospechosos[index].colorDeCabello);
	})
	$("#formasDeCabello td").each(function(index) {
		$(this).text(sospechosos[index].formaDeCabello);
	})
	$("#coloresDeTez td").each(function(index) {
		$(this).text(sospechosos[index].colorDeTez);
	})
	$("#arrestos td").each(function(index) {
		$(this).html("<button type=\"button\" class=\"btn btn-danger\" id=\"sospechosoNumero"+(index+1)+"\">Arrestar</a>");
	})
	$("#arrestos td button").each(function(index) {
		$(this).bind('touchstart click', function() {
			detective.arrestarSospechosoNumero(index);
		});
	});
}

function mostrarPistas() {
	$("#pistasEnPantalla li").each(function(index) {
		$(this).text(detective.pistas[index]);
	});
	$("#pistasEnPantalla li").each(function(index) {
		if (!($(this).text() == "")) {
			$(this).removeClass("pistaEscondida");
		}
	});
}


function chequearTiempo() {
	if (detective.tiempoRestante <=0) {
		juegoTerminado();
		$("#sinTiempoModal").modal("show");
	}
}

function reiniciarJuego() {
	for (var i=0; i < paises.length; i++) {
		paises[i].renovarTestigo();
	}
	generarSospechosos();
	culpable = new Culpable(sospechosos[Math.floor(Math.random() * sospechosos.length)]);
	culpable.estuvoEnSietePaisesAlAzar();
	detective.localizacionActual = argentina;
	detective.tiempoRestante = 72;
	$("#tiempoEnPantalla").text("72");
	$("#paisEnPantalla").text(detective.localizacionActual.nombre);
	$("ul.south-america li").removeClass("active-region");
	document.querySelector("ul .sam1").classList.add("active-region");
	for (var i=0; i < paises.length; i++) {
		paises[i].tag.style.visibility = "visible";;
	};
	argentina.tag.style.visibility = "hidden";
	mostrarSospechosos();
	detective.limpiarAgenda();
	$("#pistasEnPantalla li").each(function(index) {
		$(this).addClass("pistaEscondida");
		$(this).text("")
	});
	$("button").each(function() {
		$(this).prop('disabled', false);
	});
}


function juegoTerminado() {
	$("button").each(function() {
		$(this).prop('disabled', true);
	});
	$(".botonModal").each(function() {
		$(this).prop("disabled", false);
	});
	$("#jugarOtraVezBoton").prop("disabled", false);
	for (var i=0; i < paises.length; i++) {
		paises[i].tag.style.visibility = "hidden";;
	};
}