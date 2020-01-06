BEGIN;

INSERT INTO blogful_articles
    (title, content, date_published)
VALUES
    ('One',         'Lorem Lorem quis amet est.,',                  now() - '20 hours'::INTERVAL),
    ('Two',         'Non incididunt ex quis labore est.,',          now() - '19 hours'::INTERVAL),
    ('Three',       'Voluptate ex deserunt anim velit.',            now() - '18 hours'::INTERVAL),
    ('Four',        'Ex do incididunt non et enim.',                now() - '17 hours'::INTERVAL),
    ('Five',        'Laborum cillum magna id.',                     now() - '16 hours'::INTERVAL),
    ('Six',         'Adipisicing tempor proident non.',             now() - '15 hours'::INTERVAL),
    ('Seven',       'Eiusmod sit sunt sint aute ad.',               now() - '14 hours'::INTERVAL),
    ('Eight',       'Lorem quis elit ea.',                          now() - '13 hours'::INTERVAL),
    ('Nine',        'Dolore nostrud officia occaecat.',             now() - '12 hours'::INTERVAL),
    ('Ten',         'Do irure culpa officia elit laborum.',         now() - '11 hours'::INTERVAL),
    ('Eleven',      'Deserunt Lorem sunt id do quis amet.',         now() - '10 hours'::INTERVAL),
    ('Twelve',      'In incididunt occaecat nulla do commodo.',     now() - '9 hours'::INTERVAL),
    ('Thirteen',    'Adipisicing anim veniam.',                     now() - '8 hours'::INTERVAL),
    ('Fourteen',    'Ad reprehenderit velit quis.',                 now() - '7 hours'::INTERVAL),
    ('Fifteen',     'Ipsum voluptate veniam cupidatat.',            now() - '6 hours'::INTERVAL),
    ('Sixteen',     'Lorem laborum consequat reprehenderit.',       now() - '5 hours'::INTERVAL),
    ('Seventeen',   'Exercitation commodo consequat qu.',           now() - '4 hours'::INTERVAL),
    ('Eighteen',    'Sunt excepteureiusmod Lorem pariatur.',        now() - '3 hours'::INTERVAL),
    ('Nineteen',    'Occaecat ea labore pariatur magna deserunt.',  now() - '2 hours'::INTERVAL),
    ('Twenty',      'Et id duis irure reprehenderit aliquip.',      now() - '1 hours'::INTERVAL);

COMMIT;