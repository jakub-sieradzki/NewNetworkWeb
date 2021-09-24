<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_name' => $this->faker->firstName(),
            'user_surname' => $this->faker->lastName(),
            'user_id' => "@".$this->faker->word(),
            'profile_image_url' => "",
            'content' => $this->faker->sentence(50, true),
            'categories' => $this->faker->words(4, true),
            'views' => $this->faker->numberBetween(10, 9000),
            'comments_count' => $this->faker->numberBetween(10, 900),
        ];
    }
}
