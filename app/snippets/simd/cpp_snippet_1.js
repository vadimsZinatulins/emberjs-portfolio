export default
    `// Our monolitic class
class Entity
{
public:
    Entity();
    ~Entity();

    // Gets called every frame to update Entity's internal state
    void udpate(float deltaTime);
private:
    // Entity's position
    float m_x;
    float m_y;

    // Entity's velocity
    float m_vx;
    float m_vy;

    // Entity's health
    float m_health;
};

// Our function we want to analyze
void Entity::udpate(float deltaTime)
{
	// { ... }

	// Apply gravity
	const float gravity = -9.81f;
	m_vy += gravity * deltaTime;

	// Apply vector velocity to entity
	m_x += m_vx;
	m_y += m_vy;
}`;