/*  FB Add Page to Tab
 *	version 1.0.0
 *  (c) 2013 Flagship LLC
 *
/*--------------------------------------------------------------------------*/

// APP Idの取得
var app_id = $('._51m- ._51mw:eq(0)').text();

// Page Tab URLの取得
var secure_page_tab_url = $('#secure_page_tab_url').val();
var page_tab_url = $('#page_tab_url').val();

// Add Page Tab URLの生成
var add_secure_page_tab_url = 'https://www.facebook.com/dialog/pagetab?app_id=' + app_id + '&redirect_uri=' + secure_page_tab_url;
var add_page_tab_url = 'https://www.facebook.com/dialog/pagetab?app_id=' + app_id + '&redirect_uri=' + page_tab_url;

// Add Page Tabリンクの出力
if(secure_page_tab_url) {
	$('#navsubsectionpages li:first-child > ul > li:first-child').before("<li class='add_page_tab_link'><a href=" + add_secure_page_tab_url + " target='_blank'>Add Page Tab (Secure)</a></li>");
} else if(page_tab_url) {
	$('#navsubsectionpages li:first-child > ul > li:first-child').before("<li class='add_page_tab_link'><a href=" + add_page_tab_url + " target='_blank'>Add Page Tab</a></li>");
}
