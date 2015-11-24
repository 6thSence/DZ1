<aside class="sidebar">
    <nav class="navigation">
        <ul class="navigation-list">
            <li class="navigation-item <?php if($page == "index") echo "current"; ?>">
                <a href="/" class="navigation-link">Обо мне</a>
            </li>
            <li class="navigation-item <?php if($page == "portfolio") echo "current"; ?>">
                <a href="/portfolio" class="navigation-link">Мои работы</a>
            </li>
            <li class="navigation-item <?php if($page == "contacts") echo "current"; ?>">
                <a href="/contacts" class="navigation-link">Связаться со мной</a>
            </li>
        </ul>
    </nav>
    <adress class="contacts">
        <div class="contacts-header"><span class="header-inner-text">Контакты</span></div>
        <ul class="contacts-list">
            <li class="contacts-item contacts-item-mail">
                <div class="icon-mail"></div>
                <a href="mailto: d.pushkarskaya.pr@gmail.com" class="contacts-link">
                    <span class="contact-text">d.pushkarskaya.pr@gmail.com</span>
                </a>
            </li>
            <li class="contacts-item contacts-item-phone">
                <div class="icon-phone"></div>
                <a href="tel:+79137733362" class="contacts-link">
                    <span class="contact-text">+79137733362</span>
                </a>
            </li>
            <li class="contacts-item contacts-item-skype">
                <div class="icon-skype"></div>
                <a href="skype:dashaoealenaoo:?chat" class="contacts-link">
                    <span class="contact-text">dashaoralenaoo</span>
                </a>
            </li>
        </ul>
    </adress>
</aside>