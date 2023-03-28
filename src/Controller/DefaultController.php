<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends BaseController
{
    /**
     * @Route("/", name="homepage")
     * @return Response
     */
    public function index()
    {

        return $this->render('homepage.html.twig');
    }




}
