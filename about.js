let text = document.getElementById('text'); 
        let btn = document.getElementById('btn'); 
        let header = document.querySelector('header');
        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            text.style.marginRight = value * 2 + 'px';
            text.style.marginBottom = value * 1.5 + 'px';//moves the text upwards into the air
            btn.style.marginLeft = value * 4 + 'px';
            text.style.scrollMarginBottom = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        })