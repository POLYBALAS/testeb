var formularioAtual = null;

        function mostrarFormulario(id) {
            if (formularioAtual !== null) {
                document.getElementById(formularioAtual).style.display = 'none';
            }
            document.getElementById(id + 'Form').style.display = 'block';
            formularioAtual = id + 'Form';
        }

        document.getElementById('btnInicio').addEventListener('click', function() {
            mostrarFormulario('inicio');
        });
        document.getElementById('btnRoteirizacao').addEventListener('click', function() {
            mostrarFormulario('roteirizacao');
        });
        document.getElementById('btnAgendaGestores').addEventListener('click', function() {
            mostrarFormulario('agendaGestores');
        });
        document.getElementById('btnMapaClientes').addEventListener('click', function() {
            mostrarFormulario('mapaClientes');
        });

        mostrarFormulario('inicio');

        