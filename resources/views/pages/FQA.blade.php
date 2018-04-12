
@extends('layouts.default')

@section('content')
    <div class="page-title overlay-yellow" data-overlay="9">
        <div class="page-title-content">
            <h1><span class="font-light">FAQ</span> PAGE</h1>
            <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li class="active">FAQ Page</li>
            </ol><!-- breadcrumb -->
        </div>
    </div><!-- page-title -->
    <section class="content s-padding sidebar-right">
        <div class="container">
            <div class="row">
                @include('modules.FQA.main')
                @include('modules.FQA.aside')
            </div>
        </div><!-- container -->
    </section>
@endsection

@section('body')
    class="p-load-animation"
@endsection