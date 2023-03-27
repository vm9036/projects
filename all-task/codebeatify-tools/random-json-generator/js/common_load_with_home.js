var globalurl = "/";

$(document).ready(function() {
	
	$(".btn").addClass("span11");

	$('textarea').on('change paste keyup',function(){
	    updateCounter(this);
	});
	
			$(".navtoggle").click(function() {
				$(".mainnav").toggle("slow");
				$(".navtoggle").toggle("slow");
				$(".navtoggleclose").toggle("slow");
				$(".navbutton").toggle("slow");
			});

			$(".navtoggleclose").click(function() {
				$(".mainnav").toggle("slow");
				$(".navtoggle").toggle("slow");
				$(".navbutton").toggle("slow");
				$(".navtoggleclose").toggle("slow");
			});

	  //changing css for base64 for supported for IE.
	 
		 if(msieversion() ||  navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || /Edge\/\d./i.test(navigator.userAgent)){
			 $('.cblogoimage').prepend('<img src="/img/codebeautify_logo.png" alt="Code Beautify" />');
		 }
		 
		 $('.close1').click(function() {
				$(".ui-dialog-content").dialog("destroy");
		 });

			$(".btn,.span11").on('click', function() {
				// fsr1==1 means right side div on full screen mode
				if (fsr1 == 1) {
					fullScreenRight();
				}
				// fsr==1 means left side div on full screen mode
				else if (fsr == 1) {
					fullScreenLeft();
				}
			});
			
			/** ********start footerwitheditors js code ************ */
				$("#more").click(function() {

					$('html, body').animate({
						scrollTop : $(".footer_container").offset().top
					}, 1000);
				});
				// hide #back-top first
				$("#back-top").hide();

				// fade in #back-top
				$(function() {
					$(window).scroll(function() {
						if ($(this).scrollTop() > 100) {
							$('#back-top').fadeIn();
						} else {
							$('#back-top').fadeOut();
						}
					});

					// scroll body to 0px on click
					$('#back-top a').click(function() {
						$('body,html').animate({
							scrollTop : 0
						}, 800);
						return false;
					});
				});
			
});

//to load dynamic js files
jQuery.loadScript = function (url, callback) {
	$.ajaxSetup({ cache: true });
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
	});
	$.ajaxSetup({ cache: false });
};
//lazy load FileSaver.js for download
function fileDownloadCB(blob,filename){
	if(typeof saveAs !== 'function') { 
		$.loadScript('https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js', function(){
			//Stuff to do after someScript has loaded
		   saveAs(blob,filename);
		});
  	} else{
		saveAs(blob,filename);
	  }
}

//This will load css and jquery as and when needed.
function loadJqueryUI(callback,custarg){

	var css = jQuery("<link>");
    css.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
    });
    $("head").append(css);

	$.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function(){
		//Stuff to do after someScript has loaded
		callback(custarg);
	});
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
        return true;
    else                 // If another browser, return 0
        return false;

 return false;
}

//ajaxSend function is common to show progress bar
$(document).ajaxSend(function(event, jqxhr, settings) {

	if (settings.url != "/service/check_url") {
		if (settings.url != "/service/wordcount" && settings.url != "/service/saveKeywordHistory") {
			showProgress();
		} else {
			$("#counterLoader").show();
		}

	}
});

//ajaxComplete will remove the progressbar
$(document).ajaxComplete(function(event, jqxhr, settings) {

	if (settings.url != "/service/wordcount") {
		hideProgress();
		$("#path").val("");
	} else {
		$("#counterLoader").hide();
	}
});

//var spinnerVisible = false; unused

function showProgress() {

	$(".some_other_box").css({
		width : 0,
		'display' : 'block'
	});
	$(".some_other_box").animate({
		width : "90%",
		display : "block",

	}, 500);
}
function hideProgress() {

	$(".some_other_box").animate({
		width : "100%",
		display : "none",
	}, 500, function() {
		$(this).hide();
	});
}

//for file open and upload
function openFile(btnID, fileExt) {
	
	new AjaxUpload($('#' + btnID), {
		action : globalurl + "readfile/uploadFile",
		name : 'userfile',
		onSubmit : function(file, ext1) {
			
			var ext = ext1[0];
			if (fileExt == "Excel") {
				if (!ext.trim().startsWith('xls')) {
					openErrorDialog("Selected file is not Excel File");
					return false;
				}
			}else if (fileExt == "Word") {
				if (!ext.trim().startsWith('doc')) {
					openErrorDialog("Selected file is not Word File");
					return false;
				}
			} else if (fileExt != "any" && fileExt != ext && ext.trim() != "txt") {
				openErrorDialog("Selected file is not " + fileExt + " and txt file");
				return false;
			} else if (fileExt == "any") {
				if (ext == "jpeg" || ext == "png" || ext == "jpg" || ext == "gif" || ext == "bmp" || ext == "pdf" || ext == "pptx" || ext == "ppt") {
					openErrorDialog("Selected file is not supported");
					return false;
				}
			}

			showProgress();

		},
		onComplete : function(file, response) {
            
			if (response != 'error') {
				readFile(response, btnID);
			} else {
				openErrorDialog("Error in Loading File.");
			}

			hideProgress();

		}
	});

}
//this function is used for to read all file
function readFile(fName, btnID) {

	var url = "readfile/readFile";

	if (btnID == "excelTohtml" || btnID == "excelToxml" || btnID == "excelTojson") {
		url = "readfile/convertHTML";
		$("#fName").text(fName);
	}
	else if (btnID == "wordTohtml") {
		url = "readfile/WordToHTML";
		$("#fName").text(fName);
	}

	$.ajax({
		type : "post",
		url : globalurl + url,
		data : {
			fileName : fName,
			btnID : btnID
		},
		success : function(response) {
			
			if (response != 'error') {
				
				if(btnID == "excelToxml"){
					excelTOXml(response);
					return false;
				}
				else if(btnID == "excelTojson"){
					excelToJson(response);
					return false;
				}
				else if(btnID == "excelTohtml" || btnID == "wordTohtml"){
					htmlOutput(response);
					return false;
				}
				else if (btnID == "F2") {
					setFileName(2, fName);
					setToEditor2(response);
					return false;
				} else if (btnID == "F1") {
						setFileName(1, fName);
				}
				setToEditor(response);
		
			} else {
				openErrorDialog("Error in Loading File.");
				$("#fName").text("");
			}
		},
		error : function(e, s, a) {
			openErrorDialog("Failed to load data=" + s);
			console.log(e);
			$("#fName").text("");
		}
	});
}

function getDataFromUrlId(urlid) {
	$.ajax({
		type : "post",
		url : globalurl + "service/getDataFromID",
		dataType : "text",
		data : {
			urlid : urlid
		},
		success : function(response) {
			
			setToEditor(response.trim());
			
			$(".sharelinkurl").attr("st_url", window.location);
			$(".sharelinkurl").attr("st_title", $("#save_link_title").val());
		},
		error : function(e, s, a) {
			openErrorDialog("Failed to load data=" + s);

		}
	});
}

function clearEditorInput() {

	// this is for jsvalidate to clear textarea
	$("#jsData").val('');

	// this is for cssvalidate to clear textarea
	$("#cssData").val("");

	// this is for wordcounter to clear textarea
	$("#tData").val('');

	if (typeof editorAce != 'undefined') {
		editorAce.setValue("");
	}

	if (typeof editorResult != 'undefined') {
		editorResult.setValue("");
	} else {
		$("#result1").html("");
		$("#result").text("");
	}

	$("#result1").html("");
	if (typeof editor != 'undefined') {
		if (typeof editor.set != 'undefined') {
			editor.set();
		}
	}

	var old;
	if (old != undefined) {
		var result1 = document.getElementById("result1");
		var d = result1.contentWindow.document;
		old = "";
		d.open();
		d.write("");
		d.close();
	}
	$("#outputMsg").html("Result");
}

function setOutputMsg(msg) {
	$("#outputMsg").html("Result : " + msg);
}

function openErrorDialog(msg) {

	if (typeof jQuery.ui == 'undefined') {
		loadJqueryUI(openErrorDialog,msg);
		return;
	 }

	$('<div></div>').appendTo('#openError').html('<div>' + msg + '</h5></div>')
			.dialog({
				modal : true,
				title : "Message",
				zIndex : 10000,
				autoOpen : true,
				width : '400',
				resizable : false,
				buttons : {
					Ok : function() {
						$(this).dialog('destroy');
					}
				}
			});
}


var fsr = 0;
function fullScreenLeft() {

	$(".leftThum").hide();
	$(".rightThum").hide();

	fullScreenBoth();
	$('html, body').animate({ scrollTop: $("#mainLeftDiv").offset().top - 30 }, 500);
	return false;
	
	if (fsr == 0) {

		fsr = 1;

		//$("#fsimg").attr('src', '/img/fsout.png');
		$("#fsimg").attr('title', 'Small Screen');

		$("#mainRightDiv").hide();
		$("#mainLeftDiv").addClass('mainDivLeft');
		$("#editor").css({
			'width' : '100%'
		});
		$("#buttonDiv").css({
			'float' : 'right'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(false);
		}
		
		hideOtherArea(true);

	} else {
		fsr = 0;
		//$("#fsimg").attr('src', '/img/fsin.png');
		$("#fsimg").attr('title', 'Full Screen');

		$("#mainRightDiv").show();
		$("#mainLeftDiv").removeClass('mainDivLeft');
		$("#editor").css({
			'width' : '100%'
		});
		$("#buttonDiv").css({
			'float' : 'left'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(true);
			var data = editorResult.getValue();
			editorResult.setValue(data);

		}
		hideOtherArea(false);
	}

	if (typeof editorResult != 'undefined') {
		editorResult.resize();
	}
	if (typeof editorAce != 'undefined') {
		editorAce.resize();
	}
}

function fullScreenBoth(){	
	if (fsr == 0) {

		fsr = 1;

		//$("#fsimg").attr('src', '/img/fsout.png');
		$("#fsimg").attr('title', 'Small Screen');

		$("#mainLeftDiv").addClass('mainDivLeft');
		$("#editor").css({
			'width' : '100%'
		});
		$("#buttonDiv").css({
			'float' : 'right'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(false);
		}
		
		//$("#fs1img").attr('src', '/img/fsout.png');
		$("#fs1img1").attr('title', 'Small Screen');

		$("#mainRightDiv").addClass('mainDivLeft');
		$("#result").css({
			'width' : '100%'
		});
		$("#mainRightDiv").css({
			'float' : 'right'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(false);
		}
		
		hideOtherArea(true);

	} else {
		fsr = 0;
		//$("#fsimg").attr('src', '/img/fsin.png');
		$("#fsimg").attr('title', 'Full Screen');

		$("#mainLeftDiv").removeClass('mainDivLeft');
		$("#editor").css({
			'width' : '100%'
		});
		$("#buttonDiv").css({
			'float' : 'left'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(true);
			var data = editorResult.getValue();
			editorResult.setValue(data);

		}
		
		//$("#fs1img").attr('src', '/img/fsin.png');
		$("#fs1img").attr('title', 'Full Screen');

		$("#mainRightDiv").removeClass('mainDivLeft');
		$("#result").css({
			'width' : '100%'
		});
		$("#mainRightDiv").css({
			'float' : 'right'
		});

		if (typeof editorResult != 'undefined') {
			editorResult.getSession().setUseWrapMode(true);
		}
		hideOtherArea(false);
	}

	if (typeof editorResult != 'undefined') {
		editorResult.resize();
	}
	if (typeof editorAce != 'undefined') {
		editorAce.resize();
	}
}

function hideOtherArea(flag){
	if(flag == true){
		// $(".headerEditorContainer").hide();
		// $(".mainheader").hide();
		$(".infoSection").hide();
		$(".footerpart").hide();
		$(".footerSection").hide();
		$("#buttonDiv").hide();
		// $(".navbar-fixed-top").hide();
		$(".buttonSection").hide();
	}
	else{
		// $(".headerEditorContainer").show();
		// $(".mainheader").show();
		$(".infoSection").show();
		$(".footerpart").show();
		$(".footerSection").show();
		$("#buttonDiv").show();
		// $(".navbar-fixed-top").show();
		$(".buttonSection").show();
	}
}

var fsr1 = 0;
function fullScreenRight() {

	$(".leftThum").hide();
	$(".rightThum").hide();
	
	fullScreenBoth();
	$('html, body').animate({ scrollTop: $("#mainRightDiv").offset().top - 30 }, 500);
	return false;
}

var aefsr = 0;
function fullScreen(){
	 
	if (aefsr == 0) {

		aefsr = 1;
		//$("#aefsimg").attr('src', '/img/fsout.png');
		$("#aefsimg").attr('title', 'Small Screen');

		$("#editorAll").removeClass('span10');
		$("#editorAll").addClass('span12');

		if (typeof editorAce != 'undefined') {
			editorResult.getSession().setUseWrapMode(false);
		}
		
		hideOtherArea(true);

	} else {
		aefsr = 0;
		//$("#aefsimg").attr('src', '/img/fsin.png');
		$("#aefsimg").attr('title', 'Full Screen');
 
		$("#editorAll").removeClass('span12');
		$("#editorAll").addClass('span10');
		 
		if (typeof editorAce != 'undefined') {
			editorResult.getSession().setUseWrapMode(true);
		}
		hideOtherArea(false);
	}

	if (typeof editorResult != 'undefined') {
		editorResult.resize();
	}
	if (typeof editorAce != 'undefined') {
		editorAce.resize();
	}
}

function decodeSpecialCharacter(str) {
	return str.replace(/\&amp;/g, '&').replace(/\&gt;/g, '>').replace(/\&lt;/g,
			'<').replace(/\&quot;/g, '"');
}

/** **********start Load Url Js function ******************** */
function loadFromURL(view) {

	if (typeof jQuery.ui == 'undefined') {
		loadJqueryUI(loadFromURL,view);
		return;
	 }
	 $("#path").val("");	
	 var sampleurl = $("#sampleurl").val();
	 if(sampleurl){
		$("#loadUrlPathDiv a").click(function(){
			$("#path").val(sampleurl);
		});
	 }else{
		$("#sampleurlindialog").hide();
	 }

	$("#loadUrlPathDiv").removeClass("hide");
	$("#loadUrlPathDiv").dialog({
		modal : true,
		title : "Enter Url",
		zIndex : 10000,
		autoOpen : true,
		width : '400',
		resizable : false,
		buttons : {
			Load : function() {
				var path = $("#path").val();
				if (path.trim().length > 5) {
					loadUrl(path,view);
				}
				$(this).dialog('destroy');
				$("#loadUrlPathDiv").addClass("hide");
			},
			Cancel : function(event, ui) {
				$("#openError").html('');
				$(this).dialog('destroy');
				$("#loadUrlPathDiv").addClass("hide");
			}
		}
	});

}

function loadUrl(url,view){
	$.ajax({
		type : "post",
		url : "//codebeautify.com/URLService",
		dataType : "text",
		data : {
			path : url
		},
		success : function(response) {
			try {
				if (view == 'RSS') {
					processRSS(response);
				}

				setToEditor(response);
				updateTitleForURL("URL: "+url);

			} catch (e) {
				openErrorDialog("Invalid " + view + " Data Or Invalid "+ view+ " URL.");

			}
		},
		error : function(e, s, a) {
			openErrorDialog("Failed to load data=" + s);

		}
	});
}
/** ********** End Load Url Js function ******************** */

/** ********************** header page javascript ****************************** */
function save(data,isShare) {
	
	var titleStr = $("#save_link_title").val();
	var descStr = $("#save_link_description").val();
    var tagsStr = $("#save_link_tags").val().trim();
	//alert if there is a link in the form, this helps to ignore spams.
	if(titleStr.toLowerCase().includes("href=") || descStr.toLowerCase().includes("href=") || tagsStr.toLowerCase().includes("href=")){
		alert("This data form doest not support URL input:");
		return;
	}

	//alert if there is a link in the form, this helps to ignore spams.
	if(titleStr.toLowerCase().includes("crack") || descStr.toLowerCase().includes("crack") || tagsStr.toLowerCase().includes("crack")){
		alert("This data form doest not support this input, Please update the text and try again:");
		return;
	}

	//added this for 301 redirect to change view name
	var viewNameForLink = $("#viewName").val().trim();
	
	if(viewNameForLink=="jsonvalidate"){
		viewNameForLink = "jsonvalidator";
	}else if(viewNameForLink=="xmlvalidate"){
		viewNameForLink = "xmlvalidator";
	}
	
	$.ajax({
		url : "/service/save",
		dataType : "text",
		type : "post",
		data : {
			content : data,
			viewname : viewNameForLink,
			title : titleStr,
			desc : descStr,
			tags : tagsStr
		},
		success : function(response) {
			
			var link = "https://" + location.host + "/"	+ viewNameForLink + "/" + response;
			
			link = link.replace(" ", "");
			
			$("#subTitle").find('h4').remove();
			$("#permalink").find('a').remove();
			$("#subTitle").append(
					"<h4 style='padding-left:10px'>"+ titleStr + "</h4>");
			$("#permalink").append(
					"<a href=" + link + " style='float:left;width:100%;'>"+ link + "</a>");
			$(".sharelinkurl").attr("st_url", link);
			$(".sharelinkurl").attr("st_title", titleStr);
			$("#permalink").parent().show();
		},
		error : function(e, s, a) {
			openErrorDialog("Error in data saving");
		}
	});
}

function update(data,isShare) {

	$.ajax({
		url : "/service/update",
		dataType : "text",
		type : "post",
		data : {
			id : $("#edit_link_id").val(),
			content : data,
			viewname : $("#viewName").val().trim(),
			title : $("#save_link_title").val(),
			desc : $("#save_link_description").val(),
			tags : $("#save_link_tags").val().trim(),
			urlid : $("#fContent").val()
		},
		success : function(response) {
			$("#subTitle").find('h4').remove();
			$("#permalink").find('a').remove();
			$("#subTitle").append(
					"<h4 style='padding-left:10px'>" + $("#save_link_title").val() + "</h4>");
			$("#permalink").append(
					"<a href=" + location.href + ">" + location.href + "</a>");
			$(".sharelinkurl").attr("st_url", location.href);
			$(".sharelinkurl").attr("st_title", $("#save_link_title").val());
			$("#permalink").parent().show();
			// openPostToFbDialog();
						
			if(isShare){
				shareLink(location.href);
			}
		},
		error : function(e, s, a) {
			openErrorDialog("Error in data updating");
		}
	});
}

function shareLink(link){
	if(getProvider() == "google"){
		window.location.href = "https://plus.google.com/share?url="+link;
	}
	else{
		window.location.href = "https://www.facebook.com/sharer/sharer.php?u="+link;
	}
}

function openSavedialog(isShare) {

	if (typeof jQuery.ui == 'undefined') {
	   loadJqueryUI(openSavedialog,isShare);
	   return;
	}
	var isLogin = $("#isLogin").val();

	var data = "";
	if ($("#viewName").val().trim() == 'cssvalidate') {
		data = $("#cssData").val();
	} else if ($("#viewName").val().trim() == 'jsvalidate') {

		data = $("#jsData").val();
	} else if ($("#viewName").val().trim() == 'wordcounter') {

		data = $("#tData").val();
	} else if ($("#viewName").val().trim() == 'alleditor') {
		if (editorAce.getValue() == null && editorAce.getValue().trim().length == 0) {
			flag = false;
			return false;
		}
		data = editorAce.getValue() + "|" + $("#editorLanguage").val();

	}else if (typeof JSONEditor != 'undefined') {
		data = editor.getText();
	}
	else {
		if (typeof editorAce != 'undefined') {
			data = editorAce.getValue();
		} else {
			data = $("#input").val();
		}
	}

	if (data != null && data != "" && data.trim().length > 0) {
		$("#savedialog").removeClass("hide");
		$("#savedialog").dialog({
							modal : true,
							title : "Save Online / Download as File",
							zIndex : 10000,
							autoOpen : false,
							width : '30%',
							resizable : false,
							buttons : {
								Download : function(){
									downloadData();
									$(this).dialog('destroy');
								},"Save Online" : function() {
									var title = $("#save_link_title").val();

									if (title != null && title.trim().length != 0) {
										$('#savedialog').dialog('close');
										$("#openError").html('');
										if ($("#edit_link_id").val() == "" || $("#edit_link_id").val() == "0") {
											save(data,isShare);
											$(this).dialog('destroy');

										} else {
											if (isLogin == "1") {
												$("#savedialog").dialog("option", "disabled", true);
												$('<div></div>').appendTo('#openError').html('<div>Do you want to save as new file..?</h5></div>')
														.dialog(
																{
																	modal : true,
																	title : "Confirm",
																	zIndex : 10000,
																	autoOpen : true,
																	width : '30%',
																	resizable : false,
																	buttons : {
																		Yes : function() {
																			$("#openError").html('');
																			save(data,isShare);
																			$(this).dialog('destroy');
																			$("#savedialog").dialog('destroy');
																		},
																		No : function(event,ui) {
																			$("#openError").html('');
																			update(data,isShare);
																			$(this).dialog('destroy');
																			$("#savedialog").dialog('destroy');
																			$("#savedialog").removeClass("hide");
																		},
																		Close : function(event,ui) {
																			$("#openError").html('');
																			$(this).dialog('destroy');
																			$('#savedialog').dialog('open');
																		}
																	},
																});
											} else {
												$("#openError").html('');
												save(data,isShare);
												$(this).dialog('destroy');
											}
										}

									} else {
										openErrorDialog("Please Enter Title");
									}
								},
								Cancel : function(event, ui) {
									$("#openError").html('');
									$(this).dialog('destroy');
									$("#savedialog").addClass("hide");
								}
							},
						});
	
		$('#savedialog').dialog('open');
	} else {
		openErrorDialog("No Data in Input view");
	}

	
}

//generic JSONeditor 
function createEditor(mode1, mode2) {
	if (mode1 != undefined && mode1 != null) {
		editorAce = ace.edit("editor");
		editorAce.getSession().setMode("ace/mode/" + mode1);
		editorAce.getSession().setUseWrapMode(true);
		editorAce.on('change', function() {
			var data = editorAce.getValue();
			var regex = /\s+/gi;
			var wordCount = data.trim().replace(regex, ' ').split(' ').length;
			$("#editor1TC").text(data.length);
			$("#editor1TW").text(wordCount);
			var lines = data.split(/\r\n|\r|\n/).length;
			$("#editor1TL").text(lines);
			var count = countBytes(data);
			$("#editor1Size").text(formateByteCount(count));
			
			if($("#viewName").val() == "tableizer"){
				hideTableizer();
			}
			
			savetoLocalStorage(data);

		});
		$(".editorCounterSection").show();
	}
	 

	if (mode2 != undefined && mode2 != null) {
		editorResult = ace.edit("result");
		editorResult.getSession().setMode("ace/mode/" + mode2);
		editorResult.getSession().setUseWrapMode(true);
		editorResult.on('change', function() {
			var data = editorResult.getValue();
			var regex = /\s+/gi;
			var wordCount = data.trim().replace(regex, ' ').split(' ').length;
			$("#editor2TC").text(data.length);
			$("#editor2TW").text(wordCount);
			var lines = data.split(/\r\n|\r|\n/).length;
			$("#editor2TL").text(lines);
			var count = countBytes(data);
			$("#editor2Size").text(formateByteCount(count));
		});
		$(".editorCounterSection").show();
	}
}

/** ***********Ace Ajax Editor********************* */

function updateCounter($this){
	var data = $($this).val();
	var regex = /\s+/gi;
	var wordCount = data.trim().replace(regex, ' ').split(' ').length;
	$("#editor1TC").text(data.length);
	$("#editor1TW").text(wordCount);
	var lines = data.split(/\r\n|\r|\n/).length;
	$("#editor1TL").text(lines);
	var count = countBytes(data);
	$("#editor1Size").text(formateByteCount(count));
	$(".editorCounterSection").show();
}
	
	function countBytes(text, options) {
		var crlf = /(\r?\n|\r)/g,
			whitespace = /(\r?\n|\r|\s+)/g;
		// Set option defaults
		options = options || {};
		options.lineBreaks = options.lineBreaks || 1;
		options.ignoreWhitespace = options.ignoreWhitespace || false;
		
		var length = text.length,
			nonAscii = length - text.replace(/[\u0100-\uFFFF]/g, '').length,
		    lineBreaks = length - text.replace(crlf, '').length; 
		
		if (options.ignoreWhitespace) {
			// Strip whitespace
			text = text.replace(whitespace, '');
			
			return text.length + nonAscii;
		}
		else {
			return length + nonAscii + Math.max(0, options.lineBreaks * (lineBreaks - 1));
		}
	}
	
	function formateByteCount(count) {
		var level = 0;
		
		while (count > 1024) {
			count /= 1024;
			level++;
		}
	
		// Round to 2 decimals
		count = Math.round(count*100)/100;
	
		level = ['', 'K', 'M', 'G', 'T'][level];
	
		return count + ' ' + level + 'B';
	}

function setViewTitle(title,showMenu,showSaveBtn){
	
	if(showMenu != undefined && showMenu == true){
		$("#moreMenu").show();
	}
	else{
		$("#moreMenu").hide();
	}
	
	if(showSaveBtn != undefined && showSaveBtn == true){
		$("#savebtn").show();
	}
	else{
		$("#savebtn").hide();
	}
}

// viewers common function

function createFile(ext,divID){
	
	var content = "";
	
	if(divID == undefined){
		if(typeof editorResult != 'undefined'){
			content = editorResult.getValue();
		}
		if(content.trim().length==0 && typeof editor != 'undefined'){
			content = editor.getText();
		}	
		if(content.trim().length==0 && typeof editorAce != 'undefined'){
			content = editorAce.getValue();
		}
	}
	else{
		content = $("#"+divID).text();
		
		if(ext == "html"){
			content = vkbeautify.xml(content);
		}
	}
	
	if(ext == "converted"){
		ext = converted;
	}
	
	if (content.trim().length != 0) {
		var blob = new Blob([ "" + content + "" ], {
			type : "text/plain;charset=utf-8"
		});
		fileDownloadCB(blob, "codebeautify."+ext);
	}
	else{
		openErrorDialog("Sorry Result is Empty");
	}
}
//get and set JSON data
function getJsonSampleData() {
	var sampleJson= '{"employees":{"employee":[{"id":"1","firstName":"Tom","lastName":"Cruise","photo":"https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg"},{"id":"2","firstName":"Maria","lastName":"Sharapova","photo":"https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg"},{"id":"3","firstName":"James","lastName":"Bond","photo":"https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg"}]}}'; 
	 
	sampleJson = JSON.stringify($.parseJSON(sampleJson), null, 2);
		
	setToEditor(sampleJson);
	defaultAction();

	$(".sharelinkurl").attr("st_url", window.location);
	$(".sharelinkurl").attr("st_title", $("#save_link_title").val());
}

function getXMLSampleData(isReturn) {
	var sampleXML='<?xml version="1.0" encoding="UTF-8" ?>'  + 
	 '   <employees>  '  + 
	 '       <employee>  '  + 
	 '           <id>1</id>  '  + 
	 '           <firstName>Leonardo</firstName>  '  + 
	 '           <lastName>DiCaprio</lastName>  '  + 
	 '           <photo>http://1.bp.blogspot.com/-zvS_6Q1IzR8/T5l6qvnRmcI/AAAAAAAABcc/HXO7HDEJKo0/s200/Leonardo+Dicaprio7.jpg</photo>  '  + 
	 '       </employee>  '  + 
	 '       <employee>  '  + 
	 '           <id>2</id>  '  + 
	 '           <firstName>Johnny</firstName>  '  + 
	 '           <lastName>Depp</lastName>  '  + 
	 '           <photo>http://4.bp.blogspot.com/_xR71w9-qx9E/SrAz--pu0MI/AAAAAAAAC38/2ZP28rVEFKc/s200/johnny-depp-pirates.jpg</photo>  '  + 
	 '       </employee>  '  + 
	 '       <employee>  '  + 
	 '           <id>3</id>  '  + 
	 '           <firstName>Hritik</firstName>  '  + 
	 '           <lastName>Roshan</lastName>  '  + 
	 '           <photo>https://upload.wikimedia.org/wikipedia/commons/3/32/Hrithik_Roshan_in_2001.jpg</photo>  '  + 
	 '       </employee>  '  + 
	 '  </employees>  ' ; 
	
	 
	 if(isReturn != undefined && isReturn){
		 return vkbeautify.xml(sampleXML);
	 }
	 
	setToEditor(vkbeautify.xml(sampleXML));

	$(".sharelinkurl").attr("st_url", window.location);
	$(".sharelinkurl").attr("st_title", $("#save_link_title").val());
}

///this fucnttion called by xml to csv and json to csv
function jsonTocsvbyjson(data,returnFlag,convert_type) {
	var csv;
	try {
		var delimiter = ",";
		var csvHeader = true;
		var csvQuotes = false;
		var nobreaks = false;
		csv = jsonToCsv(data, delimiter,csvHeader,csvQuotes, nobreaks);

	} catch (e) {
		console.log(e);
		if(returnFlag == undefined || !returnFlag){
			editorResult.setValue("Error in Convert");
		}
		else{
			openErrorDialog("Error in Convert :" + e);
		}
		return false;
	}

	if(returnFlag == undefined || !returnFlag){
		editorResult.setValue(csv);
	}
	else{
		return csv;
	}
}

function csvToExcel(data,headers,returnFlag,convert_type)
{
	arr = [];
	flag = true;

	var header = headers.toString().replace(/,/g , "\t");
	var content = "";
	var headFlag = true;
        
        
	$.each(data, function(k, value) {
            
              for (var keys in value) {
       content +=value[keys]+ "\t";
   }
   content+="\n";
		
        });
        
	if(returnFlag == undefined || !returnFlag){
		editorResult.setValue(header + "\n" + content);
	}
	else{
            console.log(header + "\n" + content);
		return (header + "\n" + content);
	}
}

function jsonDataValidate(json){
	try{
		$.parseJSON(json);
	}
	catch(e){
		console.log(e);
		return false;
	}
	return true;
}

function updateProile(){
	var name = $("#profilename").val();
	
	if(name == null || name.trim().length == 0){
		openErrorDialog("Name is required. please enter name");
		return false;
	}
	
	$.ajax({
		url : "/service/updateProfile",
		dataType : "text",
		type : "post",
		data : {
			name : name,
		},
		success : function(response) {
			$("#usernamelable").text(name.substring(0, 5)+".."); 
			document.cookie="loggedinuser=" + name;
			openErrorDialog("Your Profile updated successfully");
		}
	});
}

function savetoLocalStorage(data){
	if(localStorage){
		if(!$("#viewName").val().toLowerCase().startsWith("excel")){
			localStorage.setItem($("#viewName").val(),data);
		}
		
	}
}
function setFromLocalStorage(){
	if(localStorage){
		var data = localStorage.getItem($("#viewName").val());
		if(data != null && data.trim().length != 0){
			if(typeof setToEditor == 'function'){
				setToEditor(data);
			}
		}
	}
}

//csv to html
function toHTML(data,ext,isReturn) {

	var csv = "";
	
	if(data == undefined){
		csv = editorAce.getValue();
		ext = "csv";
	}
	else{
		csv = data;
	}

	if (csv.trim().length != 0) {

		var rows = "", thead = "<tr>";

		var csvObj = Papa.parse(csv);

		var lines = csvObj.data;
		var arr = lines.slice(1, lines.length);

		arr.sort(function(a, b) {
			return b.length - a.length;
		});

		if (arr.length == 0) {
			arr = csvObj.data;
		}

		for ( var i = 0; i < arr[0].length; i++) {
			if (i < (lines[0].length)) {
				thead += "<th>" + lines[0][i] + "</th>";
			} else {
				thead += "<th>COLUMN" + (i + 1) + "</th>";
			}

		}
		thead += "</tr>";

		for ( var j = 1; j < lines.length; j++) {

			rows += "<tr>";

			for ( var i = 0; i < arr[0].length; i++) {
				if (i < (lines[j].length)) {
					rows += "<td>" + lines[j][i] + "</td>";
				} else {
					rows += "<td>&nbsp</td>";
				}
			}
			rows += "</tr>";
		}

		var output = '<table border=1><thead>\n' + thead + '</thead><tbody>\n' + rows + '</tbody></table>';
		
		if(isReturn !== undefined && isReturn == true){
			return output;
		}		
		htmlOutput(output,ext);
	} else {
		openErrorDialog("Sorry Input is Empty");
	}
}


function loadNewView() {
	//window.location.href = "/" + $("#viewName").val().trim();
	var viewName = $("#viewName").val().trim();
	localStorage.removeItem(viewName);
	window.location.href= window.location.origin +"/"+ viewName;
}

function getSampleData() {
	var viewname = $("#viewName").val().trim();

	if(viewname=="jsonviewer" || viewname=="json-to-base64-converter" || viewname=="json-escape-unescape" || viewname=="jsontoxml" || viewname=="json-to-csv" || viewname=="online-json-editor" 
		|| viewname=="json-to-yaml" || viewname=="json-to-html-converter" || viewname=="json-to-tsv-converter" || viewname=="jsonminifier" || viewname=="json-to-java-converter" || viewname=="json-to-url-encode"){
		getJsonSampleData();
	}
	else if(viewname == "un-google-link"){
		setToEditor("https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjB7JO54LDJAhULV44KHQQYB1cQFggbMAA&url=http%3A%2F%2Fcodebeautify.org%2F&usg=AFQjCNG_DKhs4g3mbjzuEWxEa2aHGfqYgw&sig2=a54qV321O8wYGpJ2kbfCNg&bvm=bv.108194040,d.c2E");
	}
	else if(viewname=="xmlviewer" || viewname=="xml-to-tsv-converter" || viewname=="online-xml-editor" || viewname=="xmltojson" || viewname=="xml-to-yaml" || viewname=="xml-to-csv-converter" || viewname=="xml-to-html-converter"
		|| viewname=="xml-to-java-converter"){
		getXMLSampleData();
	}
	else if(viewname=="text-to-html-converter")
	{
		setToEditor("The five-paragraph essay is a format of essay having five paragraphs: one introductory paragraph, three body paragraphs with support and development, and one concluding paragraph");
	}
	else if(viewname=="sql-escape-unescape"){
		setToEditor("select * from table where value = 'in single quote '' is offensive'");
	}
	else if (viewname == "word-to-html-converter") {
		setToEditor("<h1><span style='color: #ff0000;'><strong>Hello Codebeautify</strong></span></h1>");
	}
	else if(viewname == "json-diff"){
		loadJsonDiffSample();
	}
	else if (viewname != "rssviewer") {
		$.ajax({
			type : "post",
			url : globalurl + "SampleData",
			dataType : "text",
			data : {
				viewname : viewname
			},
			success : function(response) {
				response = response.trim();

				if (viewname == 'Xpath-Tester') {
					$("#xmlString").val(response);

				} 
				else if(viewname == "base64-to-image-converter"){
					$("#base64string").val(response);
					setBase64ToImage();
				}
				else
				{
					setToEditor(response);
				}
			},
			error : function(e, s, a) {
				openErrorDialog("Failed to load data=" + s);

			}
		});
	} else {
		var path = 'http://rss.cnn.com/rss/edition_world.rss';
		
		$.ajax({
			type : "post",
			url : "//codebeautify.com/URLService",
			dataType : "text",
			data : {
				path : path
			},
			success : function(response) {
				processRSS(response.trim());
				try {
					editorAce.setValue(response);
					editorAce.getSession().setUseWrapMode(true);
					FormatXML();
					editorAce.clearSelection();
				} catch (e) {
					openErrorDialog("invalid XML");
				}
			},
			error : function(e) {
				openErrorDialog("Failed to load data");
			}
		});
	}

	$(".sharelinkurl").attr("st_url", window.location);
	$(".sharelinkurl").attr("st_title", $("#save_link_title").val());
}

function getCopyText() {
	var content = "";
	content = editorResult.getValue();
	if ($("#json").is(':visible')) {
		content = editor.getText();
	}
	return content;
}

function saveRecentlyUsed(){
	if(localStorage){
		var stack = localStorage.getItem("recentUsedStack");
		if(stack == null || stack === undefined){
			stack = [];
		}
		else{
			stack= JSON.parse(stack);
		}
		
		createRecentUsedLink(stack);
		
		if(checkRecentUsedNotUnique(stack)){
			return false;
		}
		
		if(stack != null && stack !== undefined && stack.length >= 10){
			stack.shift();
		}
		
		var obj = {
					"title" : $("#subTitle").text(),
					"view" : $("#viewName").val(),
					"date" : new Date(),
				  };
		stack.push(obj);
		localStorage.setItem("recentUsedStack",JSON.stringify(stack));
	}
}


function checkRecentUsedNotUnique(stack){
	for(var i = 0; i < stack.length; i++){
		if(stack[i].view == $("#viewName").val()){
			stack[i].date = new Date();
			localStorage.setItem("recentUsedStack",JSON.stringify(stack));
			return true;
		}
	}
	return false;
}

function createRecentUsedLink(stack){
	var html = [];
	html.push("<h3>Recently Used Tools</h3>");
	html.push("<ul>");
	for(var i = stack.length - 1; i >= 0 ; i--){
		var title = stack[i].title;
		var view = stack[i].view;
		
		if(title == null || title.trim().length == 0){
			title = view.toUpperCase();
		}
		html.push("<li><a href=/"+view+">"+title+"</a></li>");
	}
	html.push("</ul>");
	$("#relatedTools").append(html.join(""));
}

//This will create a $.urlParam funcion which will check if Parameter is exists in URL/Link.
function setURLParameters(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null) {
		   return null;
		}
		return decodeURI(results[1]) || 0;
	}
}
//This function will set data from the url or db or input value
function setDefaultData() {
	createFavouriteImg();
	saveRecentlyUsed();
	setURLParameters();
	
	var url = null;
	if($.urlParam('url')!=null){
		//if url is set, Load the URL and return
		url=$.urlParam('url');
		if(url != null && url.length != 0){
			title = "URL: "+url;
			$("#subTitle").append(
				"<h4 style='padding-left:10px'>" + title + "</h4>");
			loadUrl(url,viewname);

		}
		return;
	}

	var inputDataFromURL =null;
	if($.urlParam('input')!=null){
		//if inputdata is set, Load the input from variable and set to editor
		inputDataFromURL=$.urlParam('input');
		if(inputDataFromURL != null && inputDataFromURL.length != 0){
			title = "Input Parameter";
			$("#subTitle").append(
				"<h4 style='padding-left:10px'>" + title + "</h4>");
			setToEditor(decodeURIComponent(inputDataFromURL));
		}
		return;
	}
	
	if($("#fContent").val()){
		//for dataurl like cb94c6df
		var content = $("#fContent").val().trim();
	}
	
	if($("#inputvalue").val()){
		var inputvalue = $("#inputvalue").val().trim();
	}
	if($("#fTitle").val()){
		var title = $("#fTitle").val();
	}
	if($("#fValue").val()){
		var value = $("#fValue").val().trim();
	}
	
	var viewname = $("#viewName").val().trim();
	

	if(inputvalue != null && inputvalue.trim().length != 0){
		setToEditor(inputvalue);
	}
	else if ((content != null && content.trim().length != 0)) {
		
		if (content == "sampleData") {
			getSampleData();
		} else if (viewname != "screenfly" && viewname != "send-snap-message") {
			// get data from db
			getDataFromUrlId(content);
		}

		updateTitleForURL(title);

		// $("#permalink").parent().show();
	} else {

		if (value == null || value.length == 0) {

			setFromLocalStorage();
		} else {
			// this method onliny for js/css validator when value is not empty
			FormatCSS_JS();

		}
	}

}

function updateTitleForURL(title){
	$("#subTitle").find('h4').remove();
		$("#subTitle").append(
				"<h4 style='padding-left:10px'>" + title + "</h4>");
		$("#plinkBtn")
				.parent()
				.append(
						'<input type="button" value="New" class="btn btn-inverse span11" onclick="loadNewView()" style="width: 19% !important; padding: 6px;float:right;margin-right:2%">');
		$("#plinkBtn").val('Fork');
		$("#plinkBtn").parent().show();
}

function conditionalCode() {

	var viewname = $("#viewName").val().trim();

	if (typeof editorAce != 'undefined') {
		editorAce.clearSelection();
		editorAce.getSession().setUseWorker(false);
	}
	if (typeof editorResult != 'undefined') {
		editorResult.clearSelection();
		editorResult.getSession().setUseWorker(false);
	}
	
	//var copyCss = getCopyImgByBrowser();

	$("#fs").text("");
	$("#fs").html("<span id='fsimg' class='icon-enlarge2'></span>");
	$("#fs").css({'margin-left' : '5px'});

	$("#fs1").text("");
	$("#fs1").html("<span id='fs1img' class='icon-enlarge2'></span>");

	$("#clearImg").html("<a href='#' id='sampleDataBtn' style='margin-right: 5px;' onclick='getSampleData()'>sample</a><b onclick='clearEditorInput()' style='color: red;'><span class='icon-bin'></span></b>");

	$(".btn").addClass("span11");

	// for string functions
	$("#temp").removeClass("span11");
	$("#clearImg").parent().append("<a href='#copy1' id='copy-dynamic1' style='float: right;  margin-right: 7px;' title='Copy'><span class='icon-copy'></span></a>");
	$("#fs1").parent().append("<a href='#copy' id='copy-dynamic' style='float: right;  margin-right: 7px;' title='Copy'><span class='icon-copy'></span></a>");

	$("#editor").css({'font-size' : 'small'});
	
	$("#result").css({
		'font-size' : 'small'
	});
	$("#result1").css({
		'font-size' : 'small'
	});

	$(".stButton").css({
		'display' : 'none!important'
	});

	$("#me").val("Browse");

	if (viewname == 'alleditor') {
		$("#plinkBtn")
				.parent()
				.append(
						"<a href='#copy' id='copy-dynamic1' class='btn allEditorpermalinkButton btn-inverse'style='float: right;  margin-right: 2%;width:19%;position:relative;padding:6px;' title='copy to clipborad'>Copy</a>");
		$("#savebtn").show();
	}
	// hide save button and permalink
	if (viewname == "excel-to-html" || viewname == "lorem-ipsum") {
		$("#sampleDataBtn").hide();
		$("#savebtn").hide();
		$("#permalinkDiv").hide();
	}
	
	if (viewname != "code" && viewname != "file-difference"
			&& viewname != "encrypt-decrypt"
			&& viewname != "credit-card-validate"
			&& viewname != "image-to-base64-converter"
			&& viewname != "date-time-calculater"
			&& viewname != "credit-card-fake-number-generator"
			&& viewname != "api-test") {
		
		//input 
		$('#copy-dynamic1').click(function() {
			if(viewname == "word-to-html-converter"){
				copyToClipboard($("#wordInput").text());
				return;
			}
			copyToClipboard(editorAce.getValue());
		}); 
		//result 
		$('#copy-dynamic').click(function() {
			copyToClipboard(editorResult.getValue());
		});
		//for String , Numbers and Converters view
		$('#copy-dynamic2').click(function() {
			copyToClipboard($("#output").val());
		}); 
	
	}
}

//Copy to Clipboard
function copyToClipboard(text) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    $("#copy-note-msg").html("Copied to Clipboard.");
    $('#copy-note-msg').removeClass("hide");
    $('#copy-note-msg').fadeIn().delay(10000).fadeOut();
}

// end

function createFavouriteImg(){

	$("#favToolImg").remove();
	
	var isFav = $("#isFavTool").val();
	
	var favView = $("<i>");
	favView.attr("id","favToolImg");
	$(favView).css("cursor","pointer");
	favView.attr("aria-hidden",true);

	if(isFav == "fav"){
		favView.addClass("icon-star-full");
		favView.attr("title","make it not favourite");
	}
	else{
		favView.addClass("icon-star-empty");
		favView.attr("title","make it favourite");

		if(isFav.trim().length == 0){
			$("#isFavTool").val("not-fav");
		}
	}

	$(favView).click(function(){
		if($("#notloggedin").is(':visible')){
			login();
		}
		else{
			saveMyfavourite();
		}
	});
	$("#subTitle").append(favView);
}

function saveMyfavourite(){
	$.ajax({
		url : "/service/saveFavouriteTool",
		dataType : "text",
		type : "post",
		data : {
			view : $("#viewName").val(),
			title : $("#subTitle").text(),
			isFav : $("#isFavTool").val()
		},
		success : function(response) {
			var msg = "This tool added to favourite.";
			$("#favToolImg").attr("src","../img/icons/fav.png");
			if($("#isFavTool").val() == "fav"){
				msg = "This tool remove from favourite.";
				$("#favToolImg").attr("src","../img/icons/not-fav.png");
				$("#isFavTool").val("not-fav");
			}
			else{
				$("#isFavTool").val("fav");
			}
				
			$("#copy-note-msg").html(msg);
		    $('#copy-note-msg').removeClass("hide");
		    $('#copy-note-msg').fadeIn().delay(10000).fadeOut();
		},
		error : function(e, s, a) {
			openErrorDialog("Failed to save favourite tool, Pls Try Again");
		}
	});
}

function isfavourite(){
	$.ajax({
		url : "/service/isFavouriteTool",
		dataType : "text",
		type : "post",
		data : {
			view : $("#viewName").val(),
		},
		success : function(response) {
			$("#isFavTool").val(response);
			createFavouriteImg();
		},
		error : function(e, s, a) {
			console.log(e);
		}
	});
 }
//homepages.js
var globalurl = "/";
$(document).ready(function() {
   
    $('.close1').click(function() {
        $(".ui-dialog-content").dialog("destroy");
    });
    
    $("#more").click(function() {

        $('html, body').animate({
            scrollTop : $(".footer_container").offset().top
        }, 1000);
    });

    // hide #back-top first
    $("#back-top").hide();

	// fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 800);
            return false;
        });
    });

    manageMenuAndSession(); 
});

function manageMenuAndSession(){
    var user=getCookie("loggedinuser");
	var userid=getCookie("loggedinuserid");

	if(user!="" && userid != "")	 
	{
        $("#usernamelable").text(user.substring(0, 5)+".."); 
        $("#notloggedin").hide(); 
        $("#loggedin").show();
        updateUserSession(userid);
        //isfavourite();
	}else{
        $("#loggedin").hide();
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
        	name = c.substring(name.length, c.length);
        	return name.replace(/\+/g,' ');
        }
    }
    return "";
}

function updateUserSession(id){
	$.ajax({
		type : "post",
		url : "/service/updateSession",
		data : {
			id : id
		},
		success : function(response) {
			//console.log("/service/updateSession ->" + response);
		}
	});
}

	// logout
    function logout() {
		document.cookie = "loggedinuser=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

		if(getProvider() != null){
			hello(getProvider()).logout().then(function() {
			}, function(e) {
			});
		}
		
		$.ajax({
			url : "/service/logout",
			success : function(res) {
				window.location.href = "/codebeautify_redirect";
			}
		});
	}

//Login User dropdown menu
function toggleOpenClass(){
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
(function(){var d=document,w=window;function get(element){if(typeof element=="string")
element=d.getElementById(element);return element;}
function addEvent(el,type,fn){if(w.addEventListener){el.addEventListener(type,fn,false);}else if(w.attachEvent){var f=function(){fn.call(el,w.event);};el.attachEvent('on'+type,f);}}
var toElement=function(){var div=d.createElement('div');return function(html){div.innerHTML=html;var el=div.childNodes[0];div.removeChild(el);return el;}}();function hasClass(ele,cls){return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));}
function addClass(ele,cls){if(!hasClass(ele,cls))ele.className+=" "+cls;}
function removeClass(ele,cls){var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');ele.className=ele.className.replace(reg,' ');}
if(document.documentElement["getBoundingClientRect"]){var getOffset=function(el){var box=el.getBoundingClientRect(),doc=el.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,zoom=1;if(body.getBoundingClientRect){var bound=body.getBoundingClientRect();zoom=(bound.right-bound.left)/body.clientWidth;}
if(zoom>1){clientTop=0;clientLeft=0;}
var top=box.top/zoom+(window.pageYOffset||docElem&&docElem.scrollTop/zoom||body.scrollTop/zoom)-clientTop,left=box.left/zoom+(window.pageXOffset||docElem&&docElem.scrollLeft/zoom||body.scrollLeft/zoom)-clientLeft;return{top:top,left:left};}}else{var getOffset=function(el){if(w.jQuery){return jQuery(el).offset();}
var top=0,left=0;do{top+=el.offsetTop||0;left+=el.offsetLeft||0;}
while(el=el.offsetParent);return{left:left,top:top};}}
function getBox(el){var left,right,top,bottom;var offset=getOffset(el);left=offset.left;top=offset.top;right=left+el.offsetWidth;bottom=top+el.offsetHeight;return{left:left,right:right,top:top,bottom:bottom};}
function getMouseCoords(e){if(!e.pageX&&e.clientX){var zoom=1;var body=document.body;if(body.getBoundingClientRect){var bound=body.getBoundingClientRect();zoom=(bound.right-bound.left)/body.clientWidth;}
return{x:e.clientX/zoom+d.body.scrollLeft+d.documentElement.scrollLeft,y:e.clientY/zoom+d.body.scrollTop+d.documentElement.scrollTop};}
return{x:e.pageX,y:e.pageY};}
var getUID=function(){var id=0;return function(){return'ValumsAjaxUpload'+id++;}}();function fileFromPath(file){return file.replace(/.*(\/|\\)/,"");}
function getExt(file){return(/[.]/.exec(file))?/[^.]+$/.exec(file.toLowerCase()):'';}
Ajax_upload=AjaxUpload=function(button,options){if(button.jquery){button=button[0];}else if(typeof button=="string"&&/^#.*/.test(button)){button=button.slice(1);}
button=get(button);this._input=null;this._button=button;this._disabled=false;this._submitting=false;this._justClicked=false;this._parentDialog=d.body;if(window.jQuery&&jQuery.ui&&jQuery.ui.dialog){var parentDialog=jQuery(this._button).parents('.ui-dialog');if(parentDialog.length){this._parentDialog=parentDialog[0];}}
this._settings={action:'upload.php',name:'userfile',data:{},autoSubmit:true,responseType:false,onChange:function(file,extension){},onSubmit:function(file,extension){},onComplete:function(file,response){}};for(var i in options){this._settings[i]=options[i];}
this._createInput();this._rerouteClicks();}
AjaxUpload.prototype={setData:function(data){this._settings.data=data;},disable:function(){this._disabled=true;},enable:function(){this._disabled=false;},destroy:function(){if(this._input){if(this._input.parentNode){this._input.parentNode.removeChild(this._input);}
this._input=null;}},_createInput:function(){var self=this;var input=d.createElement("input");input.setAttribute('type','file');input.setAttribute('name',this._settings.name);var styles={'position':'absolute','margin':'-5px 0 0 -175px','padding':0,'width':'220px','height':'30px','fontSize':'14px','opacity':0,'cursor':'pointer','display':'none','zIndex':2147483583};for(var i in styles){input.style[i]=styles[i];}
if(!(input.style.opacity==="0")){input.style.filter="alpha(opacity=0)";}
this._parentDialog.appendChild(input);addEvent(input,'change',function(){var file=fileFromPath(this.value);if(self._settings.onChange.call(self,file,getExt(file))==false){return;}
if(self._settings.autoSubmit){self.submit();}});addEvent(input,'click',function(){self.justClicked=true;setTimeout(function(){self.justClicked=false;},1000);});this._input=input;},_rerouteClicks:function(){var self=this;var box,dialogOffset={top:0,left:0},over=false;addEvent(self._button,'mouseover',function(e){if(!self._input||over)return;over=true;box=getBox(self._button);if(self._parentDialog!=d.body){dialogOffset=getOffset(self._parentDialog);}});addEvent(document,'mousemove',function(e){var input=self._input;if(!input||!over)return;if(self._disabled){removeClass(self._button,'hover');input.style.display='none';return;}
var c=getMouseCoords(e);if((c.x>=box.left)&&(c.x<=box.right)&&(c.y>=box.top)&&(c.y<=box.bottom)){input.style.top=c.y-dialogOffset.top+'px';input.style.left=c.x-dialogOffset.left+'px';input.style.display='block';addClass(self._button,'hover');}else{over=false;if(!self.justClicked){input.style.display='none';}
removeClass(self._button,'hover');}});},_createIframe:function(){var id=getUID();var iframe=toElement('<iframe src="javascript:false;" name="'+id+'" />');iframe.id=id;iframe.style.display='none';d.body.appendChild(iframe);return iframe;},submit:function(){var self=this,settings=this._settings;if(this._input.value===''){return;}
var file=fileFromPath(this._input.value);if(!(settings.onSubmit.call(this,file,getExt(file))==false)){var iframe=this._createIframe();var form=this._createForm(iframe);form.appendChild(this._input);form.submit();d.body.removeChild(form);form=null;this._input=null;this._createInput();var toDeleteFlag=false;addEvent(iframe,'load',function(e){if(iframe.src=="javascript:'%3Chtml%3E%3C/html%3E';"||iframe.src=="javascript:'<html></html>';"){if(toDeleteFlag){setTimeout(function(){d.body.removeChild(iframe);},0);}
return;}
var doc=iframe.contentDocument?iframe.contentDocument:frames[iframe.id].document;if(doc.readyState&&doc.readyState!='complete'){return;}
if(doc.body&&doc.body.innerHTML=="false"){return;}
var response;if(doc.XMLDocument){response=doc.XMLDocument;}else if(doc.body){response=doc.body.innerHTML;if(settings.responseType&&settings.responseType.toLowerCase()=='json'){if(doc.body.firstChild&&doc.body.firstChild.nodeName.toUpperCase()=='PRE'){response=doc.body.firstChild.firstChild.nodeValue;}
if(response){response=window["eval"]("("+response+")");}else{response={};}}}else{var response=doc;}
settings.onComplete.call(self,file,response);toDeleteFlag=true;iframe.src="javascript:'<html></html>';";});}else{d.body.removeChild(this._input);this._input=null;this._createInput();}},_createForm:function(iframe){var settings=this._settings;var form=toElement('<form method="post" enctype="multipart/form-data"></form>');form.style.display='none';form.action=settings.action;form.target=iframe.name;d.body.appendChild(form);for(var prop in settings.data){var el=d.createElement("input");el.type='hidden';el.name=prop;el.value=settings.data[prop];form.appendChild(el);}
return form;}};})();