<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 09/04/2018
 * Time: 10:43 SA
 */

namespace App\Http\Controllers;


class HomeController extends Controller
{
    public function showHomepage()
    {
        return view('pages.homepage');
    }
}