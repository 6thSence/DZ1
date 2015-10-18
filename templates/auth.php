<?php require_once '_parts/head.php'; ?>
    <div class="wrapper">
        <div class="login-div">
            <form method="POST" id="login" class="login">
                <div id="serv-msg" class="serv-msg error"></div>
                <label for="" class ="label-login" >
                    <div class="button-login-wrapper email"> </div>
                    <input class="input-login" type="text" name="login" placeholder="Введите Email" x-autocompletetype="image" qtip-position="right"
                           qtip-content="введите логин">
                </label>
                <label for="" class ="label-login" >
                    <div class="button-login-wrapper password"></div>
                    <input class="input-login" type="password" name="password" placeholder="Введите пароль" x-autocompletetype="image" qtip-position="right" qtip-content="введите пароль">
                </label>
                <div class="checkbox-login">
                    <input type="checkbox"  class="checkbox" /><label class="checkbox-label">Запомнить меня?</label></div>
                <button class="sub" type="submit" value="Войти">Войти</button>
            </form>
        </div>
    </div>
<?php require_once '_parts/footer.php' ?>