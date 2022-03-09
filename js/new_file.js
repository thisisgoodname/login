			let login = document.getElementById('denglu2');
			let zhuche = document.getElementById('zhuche2');
			let admin = document.getElementById('admin');
			let password = document.getElementById('password');
			let b = document.getElementsByClassName('b')[0];
			let denglu_box = document.getElementsByClassName('denglu-box')[0];
			let zhuche_box = document.getElementsByClassName('zhuche-box')[0];
			zhuche.addEventListener('click', () => {
				b.style.transform = 'translateX(100%)';
				denglu_box.classList.add('hidden');
				zhuche_box.classList.remove('hidden');
			})
			// 去登录按钮点击事件
			login.addEventListener('click', () => {
				b.style.transform = 'translateX(0%)';
				zhuche_box.classList.add('hidden');
				denglu_box.classList.remove('hidden');
			})