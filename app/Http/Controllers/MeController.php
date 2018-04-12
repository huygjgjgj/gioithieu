<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 09/04/2018
 * Time: 3:11 CH
 */

namespace App\Http\Controllers;


class MeController extends Controller
{
    public function showAboutme()
    {
        return view('pages.about-me');
    }
}