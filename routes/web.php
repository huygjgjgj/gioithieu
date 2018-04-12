<?php


Route::get('/', [ 'as' => 'homepage', 'uses' => 'HomeController@showHomepage']);

Route::get('about-me.html', ['as'=>'about-me', 'uses' => 'MeController@showAboutme']);

Route::get('team.html', ['as'=>'team', 'uses' => 'TeamController@showTeam']);

Route::get('contact.html', ['as'=>'contact', 'uses' => 'ContactController@showContact']);

Route::get('blog.html', ['as'=>'blog', 'uses' => 'ContactController@showBlog']);

Route::get('terms.html', ['as'=>'terms', 'uses' => 'TermsController@showTerms']);

Route::get('FQA.html', ['as'=>'FQA', 'uses' => 'FqaController@showFQA']);