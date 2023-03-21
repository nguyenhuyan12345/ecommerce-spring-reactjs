<#import "layout/defaultLayout.ftl" as layout>
<@layout.myLayout>
	<div>
		<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
			<tr>
				<td style="padding: 0px 30px 0px 30px;">
					<p>Xin chào: ${name},</p>
					<p>Bạn đã đăng ký tài khoản thành công đến cửa hàng chúng tôi</p>
					<p>Vui long click vào <a href="${link}" target="_blank" >đây</a> để kích hoạt tài khoản</p>
				</td>
			</tr>
			<tr>
				<td style="padding-left: 30px;">
					<p>
						Cảm ơn đã đăng ký thông tin đến hệ thống cửa hàng chúng tôi
					</p>
				</td>
			</tr>
		</table>
	</div>
</@layout.myLayout>