<?php
// src/DataFixtures/AppFixtures.php
namespace App\DataFixtures;

use App\Entity\Book;
use App\Entity\Category;
use App\Entity\Tag;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
// create categories
        $categories = [];
        $names = ['policier', 'fiction', 'histoire', 'bibliographie'];
        foreach ($names as $name) {
            $category = new Category();
            $category->setLabel($name);
            $manager->persist($category);
            $categories[$name] = $category;
        }


// create tags
        $tags = [];
        $names = ['tag1', 'tag2', 'tag3', 'tag4'];
        foreach ($names as $name) {
            $tag = new Tag();
            $tag->setLabel($name);
            $tag->setPublic(true);
            $manager->persist($tag);
            $tags[$name] = $tag;
        }
        // create 400 books
        for ($i = 0; $i < 400; $i++) {
            $book = new Book();
            $book->setTitle('Title book '.$i);
            $book->setResume('Resume book '.$i);
            $book->setCategory($categories[array_rand($categories, 1)]);
            $book->setPrice(mt_rand(10, 100));
            $book->setCreateDate(new \DateTime('-'.mt_rand(1,600).' days'));
            for ($j = 0; $j < $i % 4; $j++) {
                $book->addTag($tags[array_rand($tags, 1)]);
                }
            $manager->persist($book);
        }
        $manager->flush();
    }
}