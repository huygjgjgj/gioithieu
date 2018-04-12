<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 09/04/2018
 * Time: 5:25 CH
 */

namespace App\Http\Controllers;


class ContactController extends Controller
{
    public function showContact()
    {
        return view('pages.contact');
    }

    public function showBlog()
    {
        return view('pages.blog-classic');
    }
}