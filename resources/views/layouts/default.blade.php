<!DOCTYPE html>
<html class="no-js" lang="vi">
<head>
    @include('includes.page_begin')
</head>
<body @yield('body')>
        {{--@include('includes.style-switcher')--}}
    <header class="header header-v1  sticky" id="fixed">
        @include('includes.header')
    </header>
        @yield('content')
    <footer class="footer">
        @include('includes.footer')
    </footer>
</body>
    @yield('popup')
    @include('includes.page_end')
</html>