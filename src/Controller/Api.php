<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

use function Symfony\Component\DependencyInjection\Loader\Configurator\iterator;

class Api extends BaseController
{

    /**
     * @Route("/api/books/{page}", methods="GET", name="api_books", requirements={"page"="\d+"})
     * @return Response
     */
    public function books(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        Request $request,
        $page = false
    ) {
        $get = $request->query->all();
        $options = ['page' => $page, 'order' => ['b.createDate' => 'DESC']];
        $content = $request->getContent();

        $books = $entityManager->getRepository(Book::class)->books($options);
        $result = iterator_to_array($books);
        if (($get['fmt'] ?? null) == 'html') {
            return $this->render('base.html.twig', ['content' => var_export(json_encode($result), true)]);
        } else {
            return $this->json($result, 200, ['Content-Type' => 'application/json;charset=UTF-8']);
        }
    }


}