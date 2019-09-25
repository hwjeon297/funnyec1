function selectFirstCategory(val){
	if(val == "2"){
		var content = "";
		content += "<select name='secondCategory1' id='selectCategory1' class='selectCategory'>";
		content += "<option value='3'>ランニング</option>";
		content += "<option value='4'>サッカー</option>"
		content += "</select>";
		$('#secondCategory').html(content);
	}else if(val == "3"){
		var content = "";
		content += "<select name='secondCategory1' id='selectCategory1' class='selectCategory'>";
		content += "<option value='5'>キッズスニーカー</option>";
		content += "<option value='6'>ベビーシューズ</option>"
		content += "</select>";
		$('#secondCategory').html(content);
	}else if(val == "4"){
		var content = "";
		content += "<select name='secondCategory1' id='selectCategory1' class='selectCategory'>";
		content += "<option value='7'>スウール</option>";
		content += "<option value='8'>モンクストラップ</option>"
		content += "</select>";
		$('#secondCategory').html(content);
	}else if(val == "1"){
		var content = "";
		content += "<select name='secondCategory1' id='selectCategory1' class='selectCategory'>";
		content += "<option value='1'>スニーカー</option>";
		content += "<option value='2'>サンダル</option>"
		content += "</select>";
		$('#secondCategory').html(content);
	}
}
function checkForm(){
	var productName = $('#productName').val();
	var productPrice = $('#productPrice').val();
	var selectCategory = $('#selectCategory option:selected').val();

	if(productName === ""){
		alert("商品名を入力してください。");
		return false;
	}else if(productPrice === ""){
		alert("商品価格を入力してください。");
		return false;
	}else if(selectCategory === ""){
		alert("カテゴリを選択してください。");
		return false;
	}

	var sizeArr = new Array();
	var i = 200;
	for(i = 200; i<= 295; i+=5){
		var backgroundColor = $("#size"+i).css("backgroundColor");
		if(backgroundColor == "rgb(0, 0, 0)"){
			var size = $("#size"+i).text();
			sizeArr.push(size);
		}
	}
	if(sizeArr.length === 0){
		alert("サイズを選択してください。");
		return false;
	}

	$('#size').val(sizeArr);

	var insertPicture = $('#insertPicture').val();
	if(insertPicture === ""){
		alert("画像を登録してください。");
		return false;
	}

}
