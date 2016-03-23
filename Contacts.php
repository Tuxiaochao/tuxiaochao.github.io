<?php //Contacts
require '_header.php'; ?>
<div id="page" class="page-Contacts">
    <section class="header">
        <div class="containt-left">
            <a href="#">
                <img src="img/logo.png"/>
                <p>Hiking and Camping Club</p>
            </a>
        </div>
        <div class="containt-menu">
            <ul class="menu">
                <li ><a href="home.php">Home</a></li>
                <li ><a href="About-Club.php">About Club</a></li>
                <li ><a href="Trip-Schedule.php">Trip Schedule</a></li>
                <li ><a href="Gallery.php">Gallery</a></li>
                <li class="active"><a href="Contacts.php">Contacts</a></li>
            </ul>
        </div>
        <div class="containt-search">
            <a class="fa fa-search" href="javascript:void(0)" onclick="displayForm(this)" ></a>
            <form class="search">
                <label class="search-label">
                    <input class="search-input" type="text" placeholder="Search" autocomplete="off"
                           name="s" />
                    <span class="search-liveout"></span>
                </label>
                <button class="fa fa-search" type="submit"></button>
            </form>
        </div>
    </section>

    <section class="main-content">
        <section class="main">
            <div class="container">
                <div class="container-left">
                    <h3>Address</h3>
                    <p>Please note that we are unable to return long distance calls
                        unless it is a toll-free number. <br>We accept cash and cheque only.
                    </p>
                    <address class="contact-info">
                        <p class="heading">9870 St Vincent Place,<br>Glasgow, DC 45 Fr 45. </p>
                        <dl>
                            <dt>Freephone:</dt><dd><a href="callto:#">+1 800 599 6580</a></dd>
                            <dt>Telephone:</dt><dd><a href="callto:#">+1 800 603 6035</a></dd>
                            <dt>FAX:</dt><dd><a href="callto:#">+1 800 889 9898</a></dd>
                            <dt>E-mail:</dt><dd><a href="mailto:#">mail@demolink.org</a></dd>
                        </dl>
                    </address>
                </div>
                 <div class="container-right">
                    <h3>Contact Form</h3>
                    <form class="input">
                        <ul class="box">
                            <li class="littlebox">
                                <input type="text" name="Name" value=" Name*"/>
                            </li>
                            <li class="littlebox">
                                <input type="text" name="Name" value=" E-mail*"/>
                            </li>
                            <li class="littlebox">
                                <input type="text" name="Name" value=" Phone*"/>
                            </li>
                            <li class="textarea">
                                <textarea placeholder=" Message*" name="Message"></textarea>
                            </li>
                        </ul>
                        <div class="btn">
                            <button class="button" type="submit">SUBMIT COMMENT</button>
                            <span class="tip">required fields*</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="footer">
            <div class="bg">
                <ul class="bottom-menu">
                    <li><a href="home.php">Home</a></li>
                    <li><a href="About-Club.php">About Club</a></li>
                    <li><a href="Trip-Schedule.php">Trip Schedule</a></li>
                    <li><a href="Gallery.php">Gallery</a></li>
                    <li><a href="Contacts.php">Contacts</a></li>
                </ul>
                <div class="mid">
                    <div class="navigation">
                        <img src="img/icon-Navigation.png"/>
                        <p>28 JACKSON BLVD
                            STE 151, CHICAGO
                            IL 60604-2340 </p>
                    </div>
                    <div class="message">
                        <img src="img/icon-Message.png"/>
                        <p>mail@demolink.com</p>
                    </div>
                </div>
                <div class="right">
                    <div class="share">
                        <div class="circular1">
                            <i class="fa fa-youtube"></i>
                        </div>
                        <div class="circular1">
                            <i class="fa fa-tumblr"></i>
                        </div>
                        <div class="circular1">
                            <i class="fa fa-twitter "></i>
                        </div>
                        <div class="circular1">
                            <i class="fa fa-facebook"></i>
                        </div>
                        <div class="circular1">
                            <i class="fa fa-instagram"></i>
                        </div>
                    </div>
                    <div class="copyright">
                        Hiking and Camping Club © 2016. Privacy Policy
                    </div>
                </div>
            </div>
        </section>
<a class="toTop" href="#" ><i class="fa fa-chevron-circle-up"></i> </a>
</section>
<div>
<?php require '_footer.php'; ?>
