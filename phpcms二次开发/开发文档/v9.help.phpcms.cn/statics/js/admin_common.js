function confirmurl(url,message)
{
	if(confirm(message)) redirect(url);
}
function redirect(url) {
	//if(url.indexOf('://') == -1 && url.substr(0, 1) != '/' && url.substr(0, 1) != '?') url = $('base').attr('href')+url;
	location.href = url;
}
//������
$(function(){
	//window.onresize = function(){

	//}
	//window.onresize();
	//inputStyle
	$(":text").addClass('input-text');
})

/**
 * ȫѡcheckbox,ע�⣺��ʶcheckbox id�̶�ΪΪcheck_box
 * @param string name �б�check����,�� uid[]
 */
function selectall(name) {
	if ($("#check_box").attr("checked")==false) {
		$("input[name='"+name+"']").each(function() {
			this.checked=false;
		});
	} else {
		$("input[name='"+name+"']").each(function() {
			this.checked=true;
		});
	}
}
function openwinx(url,name,w,h) {
	if(!w) w=screen.width+10;
	if(!h) h=screen.height+10;
    window.open(url,name,"top=100,left=400,width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no");
}
//�����Ի���
function omnipotent(id,linkurl,title,close_type,w,h) {
	if(!w) w=700;
	if(!h) h=500;
	art.dialog({id:id,iframe:linkurl, title:title, width:w, height:h, lock:true},
	function(){
		if(close_type==1) {
			art.dialog({id:id}).close()
		} else {
			var d = art.dialog({id:id}).data.iframe;
			var form = d.document.getElementById('dosubmit');form.click();
		}
		return false;
	},
	function(){
			art.dialog({id:id}).close()
	});void(0);
}