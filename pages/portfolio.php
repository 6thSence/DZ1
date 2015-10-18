    <section class="aboutbox">
        <h2 class="aboutbox-header">Мои работы</h2>
        <div class="aboutbox-body my-work clearfix">
            <div class="wrapper-works">
                <ul class="works-list">
                    <?php foreach($projects as $project): ?>
                    <li class="works-item">
                       <div class="content-works-item">
                            <div class="wrap-img">
                                <img src="css/image/work/<?php echo $project['thumb']; ?>" alt="<?php echo $project['link']; ?>" class="img-works">
                                <a href="<?php echo $project['link']; ?>" class="works-link">Подробнее</a>
                            </div>
                            <div class="head-text-works" href="<?php echo $project['link']; ?>"><?php echo $project['title']; ?></div>
                            <p class="about-works"><?php echo $project['description']; ?></p>
                        </div>
                    </li>
                    <?php endforeach; ?>
                    <?php if(isset($_SESSION['auth']) && $_SESSION['auth'] == true): ?>
                        <li class="works-item add-works">
                            <a href="#" class="add-works-link" id="my-popup">
                                <div class="content-works-item add-works-content">
                                    <p class="add-works-p">Добавить проект</p>
                                </div>
                            </a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </section>
<div id="element_to_pop_up">
    <form action="upload.php" enctype="multipart/form-data" method="post" id="add-new-project" class="form">
        <div class="server-mes error-mes">
            <span class="bold">Ошибка!</span>
            <span class="">Невозможно добавить проект.</span>
        </div>
        <div class="server-mes success-mes">
            <span class="bold">Ура!</span>
            <span class="">Проект успешно добавлен.</span>
        </div>
        <p class="add-text">Название проекта</p>
        <input class="input" type="text" name="pro-name" placeholder="Введите название" x-autocompletetype="pro-name" qtip-position="left"	qtip-content="введите название">
        <p class="add-text">Картинка проекта</p>
        <label class="fileupload-lable">
            <input id="fileupload" class="fileupload" type="file" name="files[]">
            <input id="fileurl" type="hidden" name="fileurl">
        </label>
        <input id="filename" type="text" class="input filename" name="avatar" placeholder="Загрузите изображение" disabled qtip-content="Вы не выбрали изображение" qtip-position="left">
        <p class="add-text">URL проекта</p>
        <input class="input" type="text" name="url"  placeholder="Добавьте ссылку" x-autocompletetype="url" qtip-position="left" qtip-content="ссылка на проект">
        <p class="add-text">Описание</p>
        <textarea class="input big" name="about"  rows="5"  placeholder="Пару слов о Вашем проекте" qtip-position="left" qtip-content="описание проекта"></textarea>
        <button class="sub current" type="submit" value="Добавить">Добавить</button>
    </form>
</div>
