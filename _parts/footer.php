<footer class="page-footer clearfix">
    <div class="container">
        <div class="lock">

            <?php if($page != "auth"): ?>
                <?php if($_SESSION['auth'] != true): ?>
                    <a href="/auth" class="lock-inner"></a>
                    <a href="/auth" class="lock-inner-text">вход</a>
                <?php else: ?>
                    <a href="/logout" class="lock-inner"></a>
                    <a href="/logout" class="lock-inner-text">выход</a>
                <?php endif; ?>
            <?php endif; ?>
        </div>
        <div class="copyright">© 2015. Это мой сайт, пожалуйста, не копируйте и не воруйте его!</div>
    </div>
</footer>
<script src="js/vendor.min.js"></script>
<?php if($page == "portfolio"): ?>

    <script src="./js/jquery.ui.widget.js"></script>
    <script src="./js/jquery.iframe-transport.js"></script>
    <script src="./js/jquery.fileupload.js"></script>

<?php endif; ?>

<script src="./js/main.js"></script>
<script src="./js/popup.js"></script>
<script src="./js/add_project.js"></script>
<script src="./js/validation.js"></script>
<script src="./js/contact_me.js"></script>
<script src="./js/login.js"></script>


</body>
</html>