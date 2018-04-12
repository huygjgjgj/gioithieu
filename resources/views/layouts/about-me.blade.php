<!DOCTYPE html>
<html class="no-js" lang="vi">
<head>
    @include('includes.page_begin')
</head>
<body @yield('body')>
        @include('includes.style-switcher')
<div class="e-canvas">
    <div class="e-canvas-inner">
    <header class="header header-v1 sticky side-header" id="fixed">
        @include('includes.portfolio-demo.header')
    </header>
        @yield('content')
    </div>
</div>
        @include('includes.page_end')
        <script src="assets/js/pbar-function.js"></script>
        <script src="assets/js/progressbar.js"></script>
</body>

</html>