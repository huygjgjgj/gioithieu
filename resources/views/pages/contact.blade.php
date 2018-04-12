@extends('layouts.default')

@section('content')
    <section class="contact s-large-padding bg-sky-blue">
        <div class="contact-box-area">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Keep In Touch</h2>
                        <p>There are many variations of passages of Lorem Ipsum available but there<br> alteration in some form by injected humoures</p>
                    </div><!-- section-title -->
                    <div class="contact-box-wrapper m-left m-right">
                        <div class="col-md-4 col-sm-4">
                            <div class="contact-box boxed">
                                <h3 class="title">Email :</h3>
                                <span>ouremail@excite.com</span>
                                <span>support@excite.com</span>
                            </div><!-- contact-box -->
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="contact-box boxed">
                                <h3 class="title">PHONE :</h3>
                                <span>+880 1745 228 665 </span>
                                <span>+880 1452 228 556</span>
                            </div><!-- contact-box -->
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="contact-box boxed">
                                <h3 class="title">ADDRESS :</h3>
                                <span>B Block, Basundhara R/A </span>
                                <span>Bangladesh</span>
                            </div><!-- contact-box -->
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- contact-box-area -->
        <div class="contact-form-area s-padding bg-white">
            <div class="container">
                <div class="contact-form-wrapper m-right m-left">
                    <form id="contactform" class="contactform default">
                        <div class="form-group row">
                            <div class="col-md-6 col-sm-6">
                                <input type="text" placeholder="Name" class="form-control" id="name">
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <input type="email" placeholder="Email" class="form-control" id="email">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Password" class="form-control" id="password">
                        </div>
                        <div class="form-group">
                            <textarea id="message" placeholder="Message..." class="form-control" rows="8"></textarea>
                        </div>
                        <div class="form-submit-btn text-center ">
                            <button class="btn square large" type="submit" id="form-submit">SEND MESSAGE</button>
                        </div>
                    </form><!-- contactForm -->
                </div>
            </div>
        </div><!-- contact-form-area -->
        <div class="large-map">
            <div id="map">
                <img src="assets/images/map.PNG" title="map">
            </div>
        </div>
    </section>
@endsection

@section('body')
    class="p-load-animation"
@endsection