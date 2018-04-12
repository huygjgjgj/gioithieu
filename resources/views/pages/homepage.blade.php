@extends('layouts.default')

@section('content')
    @include('modules.homepage.slider')
    @include('modules.homepage.service')
    @include('modules.homepage.text-and-img')
    @include('modules.homepage.full-width-portfolio')
    @include('modules.homepage.feature')
    @include('modules.homepage.counter-area')
    @include('modules.homepage.text-and-img1')
    @include('modules.homepage.testimonial')
@endsection

@section('body')
    class="p-load-animation"
@endsection

@section('popup')
    @include('popup.popup')
@endsection