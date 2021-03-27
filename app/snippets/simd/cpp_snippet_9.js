export default
    `
    
class Entity
{
public:
	Entity();
	~Entity();

	// Gets called every frame to update Entity's internal state
	void udpate(float deltaTime);
private:
	// This is required so that this function can access private attributes
	friend void gravityUpdate(float deltaTime, Entity *entities, int numEntities);

	// Entity's position
	float m_x;
	float m_y;

	// Entity's velocity
	float m_vx;
	float m_vy;

	// Entity's health
	float m_health;
};

void Entity::udpate(float deltaTime)
{
	// { ... }
}

void gravityUpdate(float deltaTime, Entity *entities, int numEntities)
{
	for (int i = 0; i < numEntities; i += 4)
	{
        // Calculated gravity
		__m128 mmDeltaGravity = _mm_set_ps1(-9.81f * deltaTime);

        // Convert entities' x, y, vx and vy to __m128
		__m128 mmX = _mm_set_ps(entities[i + 0].m_x, entities[i + 1].m_x, entities[i + 2].m_x, entities[i + 3].m_x);
		__m128 mmY = _mm_set_ps(entities[i + 0].m_y, entities[i + 1].m_y, entities[i + 2].m_y, entities[i + 3].m_y);
		__m128 mmVX = _mm_set_ps(entities[i + 0].m_vx, entities[i + 1].m_vx, entities[i + 2].m_vx, entities[i + 3].m_vx);
		__m128 mmVY = _mm_set_ps(entities[i + 0].m_vy, entities[i + 1].m_vy, entities[i + 2].m_vy, entities[i + 3].m_vy);

        // Update vy
		mmVY = _mm_add_ps(mmVY, mmDeltaGravity);

        // Update positions
		mmX = _mm_add_ps(mmX, mmVX);
		mmY = _mm_add_ps(mmY, mmVY);

		float *xs = (float *)&mmX;
		float *ys = (float *)&mmY;
		float *vys = (float *)&mmY;

        // Store values back in entities
		entities[i + 0].m_x = xs[3];
		entities[i + 0].m_y = ys[3];
		entities[i + 0].m_vy = vys[3];

		entities[i + 1].m_x = xs[2];
		entities[i + 1].m_y = ys[2];
		entities[i + 1].m_vy = vys[2];

		entities[i + 2].m_x = xs[1];
		entities[i + 2].m_y = ys[1];
		entities[i + 2].m_vy = vys[1];

		entities[i + 3].m_x = xs[0];
		entities[i + 3].m_y = ys[0];
		entities[i + 3].m_vy = vys[0];
	}
}`;