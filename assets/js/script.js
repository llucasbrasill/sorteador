
	// Participantes
	var participantes = [];
	var participando = 0;

					// Adiciona o nome do candidato
					function adicionarParticipante() {
					if(document.getElementById('participante').value!="") {
						var participante = document.getElementById('participante').value.toLowerCase();
						var participando = participantes.length;

						if (participante.length <= 30) {
							var adicionar = participantes.push("<li>"+participante+"</li>");
							document.getElementById('participando').innerHTML = participantes.join('');
							document.getElementsByClassName('participando')[0].style.visibility ='inline-block';
							document.getElementById('participante').value='';
						}else {alert("Nome grande, digite um nome menor!");}

					}else {alert('Digite o nome do participante para adicionar!')}
					}

				function sortear() {
					var participando = participantes.length;
					if (participantes.length > 0) {
						var sortudo = Math.floor(Math.random() * participando);
						document.getElementById('sorteado').innerHTML = participantes[sortudo];
					}else {alert('Adicone participantes para sortear');}
				}

				function remover() {
					if(document.getElementById('participante').value!="") {
						var participante = document.getElementById('participante').value.toLowerCase();
						document.getElementById('participante').value='';
						var remover = participantes.indexOf("<li>"+participante+"</li>");
						var removedItem = participantes.splice(remover, 1);
						document.getElementById('participando').innerHTML = participantes.join('');
						if (participantes.length == 0) {
							document.getElementsByClassName('participando')[0].style.display ='none';
						}
					}else {alert('Nenhum participante selecionado, digite o nome do participante para remover!')}
				}
