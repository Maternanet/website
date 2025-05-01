
<script>
    var services_menu = { hover: false, click: false };
    var features_menu = { hover: false, click: false };
    var menu = false
</script>
<!-- Header Start -->
<header class="main-header">
    <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <!-- Logo Start -->
                <a class="navbar-brand" href="/">
                    <img src="images/logo3.png" alt="Logo" height="50px">
                </a>
                <!-- Logo End -->

                <!-- Main Menu Start -->
                <div class="collapse navbar-collapse main-menu">
                    <div class="nav-menu-wrapper">
                        <ul class="navbar-nav mr-auto" id="menu">
                            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>                                
                            <li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="/services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                            <li class="nav-item highlighted-menu"><a class="nav-link" href="/contact">Contact Us</a></li>                               
                        </ul>
                    </div>
                    <!-- Let’s Start Button Start -->
                    <div class="header-btn d-inline-flex">
                        <a href="/contacts" class="btn-default btn-highlighted">Contact Us</a>
                    </div>
                    <!-- Let’s Start Button End -->
                </div>
                <!-- Main Menu End -->
                <div class="navbar-toggle">
                    <a href="#" on:click={()=>menu= !menu} aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt"></span><span class="slicknav_icon slicknav_no-text"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a>
                </div>
            </div>
        </nav>
        <div class="responsive-menu">
            <div class="slicknav_menu">
                <ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="{ menu ?'':'display: none;'}">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>                                
                    <li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="/services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                    <li class="nav-item highlighted-menu"><a class="nav-link" href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
<!-- Header End -->

