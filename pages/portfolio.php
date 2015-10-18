    <section class="aboutbox">        <h2 class="aboutbox-header">��� ������</h2>        <div class="aboutbox-body my-work clearfix">            <div class="wrapper-works">                <ul class="works-list">                    <?php foreach($projects as $project): ?>                    <li class="works-item">                       <div class="content-works-item">                            <div class="wrap-img">                                <img src="css/image/work/<?php echo $project['thumb']; ?>" alt="<?php echo $project['link']; ?>" class="img-works">                                <a href="<?php echo $project['link']; ?>" class="works-link">���������</a>                            </div>                            <div class="head-text-works">                                <a href="<?php echo $project['link']; ?>" target="_blank" class=""><?php echo $project['title']; ?></a>                            </div>                            <p class="about-works"><?php echo $project['description']; ?></p>                        </div>                    </li>                    <?php endforeach; ?>                    <?php if(isset($_SESSION['auth']) && $_SESSION['auth'] == true): ?>                        <li class="works-item add-works">                            <a href="#" class="add-works-link" id="my-popup">                                <div class="content-works-item add-works-content">                                    <p class="add-works-p">�������� ������</p>                                </div>                            </a>                        </li>                    <?php endif; ?>                </ul>            </div>        </div>    </section><div id="element_to_pop_up">    <form action="upload.php" enctype="multipart/form-data" method="post" id="add-new-project" class="form">        <div class="server-mes error-mes">            <span class="bold">������!</span>            <span class="">���������� �������� ������.</span>        </div>        <div class="server-mes success-mes">            <span class="bold">���!</span>            <span class="">������ ������� ��������.</span>        </div>        <p class="add-text">�������� �������</p>        <input class="input" type="text" name="pro-name" placeholder="������� ��������" x-autocompletetype="pro-name" qtip-position="left"	qtip-content="������� ��������">        <p class="add-text">�������� �������</p>        <label class="fileupload-lable">            <input id="fileupload" class="fileupload" type="file" name="files[]">            <input id="fileurl" type="hidden" name="fileurl">        </label>        <input id="filename" type="text" class="input filename" name="avatar" placeholder="��������� �����������" disabled qtip-content="�� �� ������� �����������" qtip-position="left">        <p class="add-text">URL �������</p>        <input class="input" type="text" name="url"  placeholder="�������� ������" x-autocompletetype="url" qtip-position="left" qtip-content="������ �� ������">        <p class="add-text">��������</p>        <textarea class="input big" name="about"  rows="5"  placeholder="���� ���� � ����� �������" qtip-position="left" qtip-content="�������� �������"></textarea>        <button class="sub current" type="submit" value="��������">��������</button>    </form></div>