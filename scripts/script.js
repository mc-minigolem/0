function on_button(type){
		link = ''
		link_vip = 'https://oplata.qiwi.com/form?extras%5BwidgetAlias%5D=andrei-s_r0qd-ugs&extras%5BwidgetReferrer%5D=my.qiwi.com&extras%5BthemeCode%5D=Andrei-S_r0QD-ugs&invoiceUid=7c0cb954-524f-4736-be16-3498ecda87a5'
		link_premium = 'https://oplata.qiwi.com/form?extras%5BwidgetAlias%5D=andrei-s_r0qd-ugs&extras%5BwidgetReferrer%5D=my.qiwi.com&extras%5BthemeCode%5D=Andrei-S_r0QD-ugs&invoiceUid=9b274dd3-dcda-40b5-9aeb-9d703519b300'
		link_ultra = 'https://oplata.qiwi.com/form?extras%5BwidgetAlias%5D=andrei-s_r0qd-ugs&extras%5BwidgetReferrer%5D=my.qiwi.com&extras%5BthemeCode%5D=Andrei-S_r0QD-ugs&invoiceUid=6cacc70c-307b-4750-9a64-9eab133f3b09'
		link_lord = 'https://oplata.qiwi.com/form?extras%5BwidgetAlias%5D=andrei-s_r0qd-ugs&extras%5BwidgetReferrer%5D=my.qiwi.com&extras%5BthemeCode%5D=Andrei-S_r0QD-ugs&invoiceUid=11eeae17-00c0-4a85-85c8-67ca9540240e'
		link_moder = 'https://oplata.qiwi.com/form?extras%5BwidgetAlias%5D=andrei-s_r0qd-ugs&extras%5BwidgetReferrer%5D=my.qiwi.com&extras%5BthemeCode%5D=Andrei-S_r0QD-ugs&invoiceUid=b1e505d7-dc1d-467d-903f-c24719dcae74'
		nickname = document.getElementById(type + '_nickname_id').value;
		if (!nickname){
			document.getElementById(type + "_error").innerHTML = "Введите никнейм";
		} else {
			document.getElementById(type + "_error").innerHTML = "";
			
			if (type == 'vip')
				link = link_vip;
			else if (type == 'premium')
				link = link_premium;
			else if (type == 'ultra')
				link = link_ultra;
			else if (type == 'lord')
				link = link_lord;
			else if (type == 'moder')
				link = link_moder;

			window.location = link;
		}
	}