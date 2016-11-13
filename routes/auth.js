
exports.autenticacao = function(database, req, res){
	console.log("chegou aqui");
	var collection = database.collection("funcionario");

  	collection.findOne(req.body, function(err, result) {
  		if(!err){
  			console.log("Autenticado");
  			res.send(result);
  		}else{
  			console.log("Erro: " + err);
  			res.status(400).send("fail");
  		}
  	});
}
