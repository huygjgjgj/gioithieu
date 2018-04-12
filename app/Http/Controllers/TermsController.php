<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 09/04/2018
 * Time: 5:54 CH
 */

namespace App\Http\Controllers;


class TermsController extends Controller
{
    public function showTerms()
    {
        return view('pages.terms');
    }
}